<script>
    import { page } from '$app/stores';
    const { offModels, update_rec } = $props();

    let education = $derived({
        school: '',
        course: '',
        started: '',
        end: '',
        more_details: '',
    });

    let sending = $state(false);
    async function submit_form() {
        sending = true;
        await update_rec('education', education);
        sending = false;
        offModels();
    }

    //  $inspect(educations);
</script>

<button onclick={offModels} class="fixed w-screen h-screen backdrop-blur-[4px] z-[100] bg-[#27272740] left-0 top-0"
></button>

<div
    class="p-4 absolute z-[105] bg-[#ffffff] top-[10%] w-[80%] m-auto md:w-1/2 left-0 right-0 flex-col flex rounded-md"
>
    <div class=" mb-4">
        <h2 class="font-bold text-2xl capitalize">Education</h2>
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
            </div>
        </form>
    </div>
</div>
