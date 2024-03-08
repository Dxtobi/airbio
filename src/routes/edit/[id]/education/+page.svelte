<script>
    import { page } from '$app/stores';
    import Toast from '../../../../lib/components/Toast.svelte';
    import { extractYearMonth } from '../../../../lib/utils/helpers.utils';
    import { delete_edu, submit_form_edu } from '../../../../lib/utils/server-actions';
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
    let education = $derived({
        school: '',
        course: '',
        started: '',
        end: '',
        more_details: '',
        education: $page.data?.resume?.education,
        resume: $page.data?.resume?.id,
    });

    let educations = $derived(
        $page.data?.resume?.expand?.education?.length > 0 ? $page.data?.resume?.expand?.education : [],
    );
    async function submit_form() {
        sending = true;
        const resp = await submit_form_edu(education);
        if (resp.susses) {
            alert = {
                type: 'saved',
                message: resp.message,
            };
            //education.push(education);
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

    //  $inspect(educations);
</script>

{#if show_toast}
    <Toast message={alert.message} type={alert.type} />
{/if}
<section>
    <div class="mb-4">
        <h2 class="font-bold text-2xl capitalize">
            Education <span class=" text-[#b63ae799]">{educations.length}</span>
        </h2>
        <p>Lets talk about your education.</p>
    </div>

    <div>
        <form onsubmit={submit_form}>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                <div class="flex flex-col gap-2">
                    <span class=" font-semibold capitalize">School</span>
                    <input
                        bind:value={education.school}
                        placeholder="school"
                        class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                        name="school"
                        type="text"
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <span class=" font-semibold capitalize">Course</span>
                    <input
                        bind:value={education.course}
                        placeholder="Computer science"
                        class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                        name="course"
                        type="text"
                    />
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="flex flex-col gap-2">
                    <span class=" font-semibold capitalize">Start</span>
                    <input
                        bind:value={education.started}
                        placeholder=""
                        class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                        name="started"
                        type="date"
                    />
                </div>

                <div class="flex flex-col gap-2">
                    <span class=" font-semibold capitalize">End</span>
                    <input
                        bind:value={education.end}
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
                        bind:value={education.more_details}
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
                    href={`/edit/${$page.data.resume.id}/experience`}
                    class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] text-center"
                    >Back
                </a>
                <a
                    href={`/edit/${$page.data.resume.id}/projects`}
                    class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] text-center"
                    >Next
                </a>
            </div>
        </form>
        <div class="grid grid-cols-1 md:grid-cols-3 mb-4 gap-1">
            {#each educations as wxp}
                <div
                    class=" flex justify-between py-1 px-4 border-2 rounded-lg items-center border-purple-600 text-purple-600"
                >
                    <h3 class=" capitalize text-sm">{wxp.school}-{wxp.course}</h3>
                    <div class="flex items-center gap-2">
                        <small>{extractYearMonth(wxp.end)}</small>
                        <button class="text-2xl text-red-400" onclick={() => delete_edu(wxp.id)}>&times;</button>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
