<script>
    const { offModels, update_rec } = $props();
    let contact = $derived({
        contact: '',
    });

    let sending = $state(false);
    async function submit_form() {
        sending = true;
        await update_rec('experience', contact);
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
        <h2 class="font-bold text-2xl capitalize">Experience</h2>
    </div>
    <form onsubmit={submit_form} class="m-auto w-fit grid grid-cols-1 place-content-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 justify-cente">
            <div class="flex flex-col gap-2">
                <span class=" font-semibold capitalize">Contact </span>
                <input
                    bind:value={contact.contact}
                    placeholder="Contact "
                    class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                    name="contact_type"
                    type="text"
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
