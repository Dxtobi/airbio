<script>
    const { offModels, update_rec } = $props();

    let language = $derived({
        language: '',
        level: 'beginner',
    });

    let sending = $state(false);
    async function submit_form() {
        sending = true;
        await update_rec('language', language);
        sending = false;
        offModels();
    }
</script>

<button onclick={offModels} class="fixed w-screen h-screen backdrop-blur-[4px] z-[100] bg-[#27272740] left-0 top-0"
></button>

<div
    class="p-4 absolute z-[105] bg-[#ffffffeb] top-[10%] w-[80%] m-auto md:w-1/2 left-0 right-0 flex-col flex rounded-md"
>
    <div class=" mb-4">
        <h2 class="font-bold text-2xl capitalize">Language</h2>
    </div>

    <form onsubmit={submit_form}>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <div class="flex flex-col gap-2">
                <span class=" font-semibold capitalize">language</span>
                <input
                    bind:value={language.language}
                    placeholder="Igbo-ish fulani"
                    class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                    name="language"
                    type="text"
                />
            </div>
            <div class="flex flex-col gap-2">
                <span class=" font-semibold capitalize">Level</span>
                <select
                    bind:value={language.level}
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
