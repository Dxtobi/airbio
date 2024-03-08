<script>
    import { page } from '$app/stores';
    import Toast from '../../../../lib/components/Toast.svelte';
    import { delete_skill, submit_form_skills } from '../../../../lib/utils/server-actions';
    let show_toast = $state(false);
    let alert = $state({ type: 'default', message: 'no message was passed' });
    let sending = $state(false);
    $effect(() => {
        if (show_toast) {
            setTimeout(async () => {
                show_toast = false;
            }, 5000);
        }
    });
    let skill = $derived({
        type: '',
        level: 'beginner',
        more_details: '',
        skills: $page.data?.resume?.skills,
        resume: $page.data?.resume?.id,
    });

    let skills = $derived($page.data?.resume?.expand?.skills?.length > 0 ? $page.data?.resume?.expand?.skills : []);
    async function submit_form() {
        sending = true;
        const resp = await submit_form_skills(skill);
        if (resp.susses) {
            alert = {
                type: 'saved',
                message: resp.message,
            };
            //skill.push(skill);
        } else {
            alert = {
                type: 'not-saved',
                message: resp.message,
            };
        }

        //console.log(resp, '---');
        show_toast = true;
        sending = false;
    }

    // $inspect(skills);
</script>

{#if show_toast}
    <Toast message={alert.message} type={alert.type} />
{/if}
<section>
    <div class="mb-4">
        <h2 class="font-bold text-2xl capitalize">skills <span class=" text-[#b63ae799]">{skills.length}</span></h2>
        <p>Which of your skill(s) would contribute to to the grouth of the company.</p>
    </div>

    <div>
        <form onsubmit={submit_form}>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                <div class="flex flex-col gap-2">
                    <span class=" font-semibold capitalize">skill</span>
                    <input
                        bind:value={skill.type}
                        placeholder="MSexcel"
                        class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                        name="skill"
                        type="text"
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <span class=" font-semibold capitalize">Level</span>
                    <select
                        bind:value={skill.level}
                        class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                        name="course"
                    >
                        <option value="beginner">Beginner</option>
                        <option value="experienced">Experienced</option>
                        <option value="mid">Mid</option>
                        <option value="professional">Professional</option>
                    </select>
                </div>
            </div>

            <div class="w-full">
                <div class="flex flex-col gap-2 w-full md:w-[70%]">
                    <span class=" font-semibold capitalize"
                        >details <span class=" font-extralight text-gray-700">(optional)</span></span
                    >
                    <textarea
                        bind:value={skill.more_details}
                        placeholder="Tell us more"
                        class="w-full max-h-60 rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition min-h-60"
                        name="more_details"
                    />
                </div>
            </div>

            <div class="flex gap-2">
                <button class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] flex justify-center" type="submit"
                    >{#if sending}
                        <span
                            style="border-top-color:transparent"
                            class="w-8 h-8 border-4 border-gray-800 border-solid rounded-full animate-spin block"
                        ></span>
                    {:else}
                        Save
                    {/if}
                </button>
                <a
                    href={`/edit/${$page.data.resume.id}/certificates`}
                    class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] text-center"
                    >Back
                </a>
                <a
                    href={`/edit/${$page.data.resume.id}/languages`}
                    class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] text-center"
                    >Next
                </a>
            </div>
        </form>
        <div class="grid grid-cols-1 md:grid-cols-3 mb-4 gap-1">
            {#each skills as wxp}
                <div
                    class=" flex justify-between py-1 px-4 border-2 rounded-lg items-center border-purple-600 text-purple-600"
                >
                    <h3 class=" capitalize text-sm">{wxp.type}-{wxp.level}</h3>
                    <div class="flex items-center gap-2">
                        <button class="text-2xl text-red-400" onclick={() => delete_skill(wxp.id)}>&times;</button>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
