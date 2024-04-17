<script>
    import Experience from './../../../../lib/components/preview/templates/ai/Experience.svelte';
    import { page } from '$app/stores';
    import Toast from '../../../../lib/components/Toast.svelte';
    import { extractYearMonth } from '../../../../lib/utils/helpers.utils';
    import { delete_exp, submit_form_exp } from '../../../../lib/utils/server-actions';
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
    let experience = $derived({
        job_title: '',
        started: '',
        ended: '',
        company: '',
        more_details: '',
        experience: $page.data?.resume?.experience,
        resume: $page.data?.resume?.id,
    });

    let experiences = $derived(
        $page.data?.resume?.expand?.experience?.length > 0 ? $page.data?.resume?.expand?.experience : [],
    );
    async function submit_form(exp = experience) {
        sending = true;
        const resp = await submit_form_exp(exp);
        if (resp.susses) {
            alert = {
                type: 'saved',
                message: resp.message,
            };
            //experiences.push(experience);
        } else {
            alert = {
                type: 'not-saved',
                message: resp.message,
            };
        }

        console.log(resp, '---');
        show_toast = true;
        sending = false;
    }

    // $inspect(experiences);
</script>

{#if show_toast}
    <Toast message={alert.message} type={alert.type} />
{/if}
<section>
    <div class="mb-4">
        <h1 class="font-bold text-2xl capitalize">
            Experience <span class=" text-[#b63ae799]">{experiences.length}</span>
        </h1>
        <p>Give relevant past experience.</p>
    </div>

    <div class="flex gap-4 w-full justify-center flex-col-reverse md:flex-row">
        <div class="">
            <form onsubmit={submit_form} class="">
                <div class="flex flex-wrap gap-4 mb-10 w-full">
                    <div class="flex flex-col gap-2 w-full">
                        <span class=" font-semibold capitalize">Job title</span>
                        <input
                            bind:value={experience.job_title}
                            placeholder="Developer"
                            class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                            name="job_title"
                            type="text"
                        />
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <span class=" font-semibold capitalize">Company</span>
                        <input
                            bind:value={experience.company}
                            placeholder="Netflix"
                            class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                            name="company"
                            type="text"
                        />
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="flex flex-col gap-2">
                        <span class=" font-semibold capitalize">Start</span>
                        <input
                            bind:value={experience.started}
                            placeholder=""
                            class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                            name="started"
                            type="date"
                        />
                    </div>

                    <div class="flex flex-col gap-2">
                        <span class=" font-semibold capitalize">End</span>
                        <input
                            bind:value={experience.ended}
                            class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                            name="ended"
                            type="date"
                        />
                    </div>
                </div>
                <h3 class="mt-10 mb-4 font-bold text-xl">Other info</h3>

                <div class="w-full">
                    <div class="flex flex-col gap-2 w-full md:w-[70%]">
                        <span class=" font-semibold capitalize">details</span>
                        <textarea
                            bind:value={experience.more_details}
                            placeholder="Tell us more"
                            class="w-full max-h-60 rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition min-h-40"
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
                        href={`/edit/${$page.data.resume.id}/personal_info`}
                        class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] text-center"
                        >Back
                    </a>
                    <a
                        href={`/edit/${$page.data.resume.id}/education`}
                        class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] text-center"
                        >Next
                    </a>
                </div>
            </form>
            <div class="grid grid-cols-1 md:grid-cols-3 mb-4 gap-1">
                {#each experiences as exp}
                    <div
                        class=" flex justify-between py-1 px-4 border-2 rounded-lg items-center border-purple-600 text-purple-600"
                    >
                        <h3 class=" capitalize text-sm">{exp.job_title}</h3>
                        <div class="flex items-center gap-2">
                            <small>{extractYearMonth(exp.ended)}</small>
                            <button class="text-2xl text-red-400" onclick={() => delete_exp(exp.id)}>&times;</button>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <!-- <div class=" w-full md:w-[30%]">
            <h2 class="mb-2 font-bold">Experience</h2>
            {#each $page?.data?.experience?.items as exp}
                <div class="flex justify-between w-full border rounded-md px-4 py-2 items-center mb-4">
                    <span class=" capitalize">{exp.job_title}</span><button
                        onclick={() => click_to_add(exp)}
                        class="font-bold text-[1rem] hover:scale-[2] hover:text-green-600 transition-all">&plus;</button
                    >
                </div>
            {/each}
        </div> -->
    </div>
</section>
