<script>
    import { page } from '$app/stores';
    import Toast from '../../../../lib/components/Toast.svelte';

    import { delete_cert, submit_form_cert } from '../../../../lib/utils/server-actions';
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
    $inspect($page.data.resume);
    let certificate = $derived({
        name: '',
        awarded_by: '',
        certificates: $page.data?.resume?.certificates,
        resume: $page.data?.resume?.id,
    });

    let certificates = $derived(
        $page.data?.resume?.expand?.certificates?.length > 0 ? $page.data?.resume?.expand?.certificates : [],
    );
    async function submit_form() {
        sending = true;
        const resp = await submit_form_cert(certificate);
        if (resp.susses) {
            alert = {
                type: 'saved',
                message: resp.message,
            };
            //certificate.push(certificate);
        } else {
            alert = {
                type: 'not-saved',
                message: resp.message,
            };
        }

        //   console.log(resp, '---');
        show_toast = true;
        sending = false;
    }
</script>

{#if show_toast}
    <Toast message={alert.message} type={alert.type} />
{/if}
<section>
    <div class="mb-4">
        <h2 class="font-bold text-2xl capitalize">
            Certificate <span class=" text-[#b63ae799]">{certificates.length}</span>
        </h2>
        <p>certificates boost employers confident in you.</p>
    </div>

    <div>
        <form onsubmit={submit_form}>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                <div class="flex flex-col gap-2">
                    <span class=" font-semibold capitalize">Certificate</span>
                    <input
                        bind:value={certificate.name}
                        placeholder="certificate name"
                        class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                        name="cert_name"
                        type="text"
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <span class=" font-semibold capitalize">Awarded By</span>
                    <input
                        bind:value={certificate.awarded_by}
                        placeholder="Micro Hard"
                        class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                        name="awarded_by"
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

                <a
                    href={`/edit/${$page.data.resume.id}/projects`}
                    class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] text-center"
                    >Back
                </a>
                <a
                    href={`/edit/${$page.data.resume.id}/skills`}
                    class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] text-center"
                    >Next
                </a>
            </div>
        </form>
        <div class="grid grid-cols-1 md:grid-cols-3 mb-4 gap-1">
            {#each certificates as wxp}
                <div class=" flex justify-between py-1 px-4 border-2 rounded-lg items-center border-purple-600">
                    <h3 class=" capitalize text-sm">{wxp.name}</h3>
                    <div class="flex items-center gap-2">
                        <button class="text-2xl text-red-400" onclick={() => delete_cert(wxp.id)}>&times;</button>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
