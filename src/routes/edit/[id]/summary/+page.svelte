<script>
    import { page } from '$app/stores';
    import Toast from '../../../../lib/components/Toast.svelte';
    import { submit_form_PI } from '../../../../lib/utils/server-actions';
    let show_toast = $state(false);
    let alert = $state({ type: 'default', message: 'no message was passed' });
    let sending = $state(false);
    let summary = $derived({
        summary: $page.data.resume.summary,
        id: $page.data.resume.id,
    });

    async function submit_form() {
        sending = true;
        const resp = await submit_form_PI(summary);
        // console.log(resp);
        if (resp.susses) {
            alert = {
                type: 'saved',
                message: resp.message,
            };
        } else {
            alert = {
                type: 'not-saved',
                message: resp.message,
            };
        }
        show_toast = true;
        sending = false;
    }

    $effect(() => {
        if (show_toast) {
            setTimeout(async () => {
                show_toast = false;
            }, 5000);
        }
    });
</script>

{#if show_toast}
    <Toast message={alert.message} type={alert.type} />
{/if}
<section>
    <div class="mb-10">
        <h2 class="font-bold text-2xl capitalize">summary</h2>
        <p>Now summarize all this lies you just told.</p>
    </div>
    <div>
        <form onsubmit={submit_form}>
            <div class="w-full">
                <div class="flex flex-col gap-2 w-full">
                    <span class=" font-semibold capitalize">details </span>
                    <textarea
                        bind:value={summary.summary}
                        placeholder="Tell us more about you"
                        class="w-full max-h-60 rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition min-h-60"
                        name="summary"
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
                    href={`/edit/${$page.data.resume.id}/languages`}
                    class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] text-center"
                    >Back
                </a>
                <a
                    href={`/preview/${$page.data.resume.id}`}
                    class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] text-center"
                    >Preview
                </a>
            </div>
        </form>
    </div>
</section>
