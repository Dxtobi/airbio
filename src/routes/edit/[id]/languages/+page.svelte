<script>
    import { page } from '$app/stores';
    import Toast from '../../../../lib/components/Toast.svelte';
    import { delete_lang, submit_form_lang } from '../../../../lib/utils/server-actions';
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
    let language = $derived({
        language: '',
        level: 'beginner',
        languages: $page.data?.resume?.languages,
        resume: $page.data?.resume?.id,
    });

    let languages = $derived(
        $page.data?.resume?.expand?.languages?.length > 0 ? $page.data?.resume?.expand?.languages : [],
    );
    async function submit_form() {
        sending = true;
        const resp = await submit_form_lang(language);
        if (resp.susses) {
            alert = {
                type: 'saved',
                message: resp.message,
            };
            //language.push(language);
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
</script>

{#if show_toast}
    <Toast message={alert.message} type={alert.type} />
{/if}
<section>
    <div class="mb-4">
        <h2 class="font-bold text-2xl capitalize">
            languages <span class=" text-[#b63ae799]">{languages.length}</span>
        </h2>
        <p>How many language can you speak?.</p>
    </div>

    <div>
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
                <a
                    href={`/edit/${$page.data.resume.id}/skills`}
                    class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] text-center"
                    >Back
                </a>
                <a
                    href={`/edit/${$page.data.resume.id}/summary`}
                    class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] text-center"
                    >Next
                </a>
            </div>
        </form>
        <div class="grid grid-cols-1 md:grid-cols-3 mb-4 gap-1">
            {#each languages as wxp}
                <div
                    class=" flex justify-between py-1 px-4 border-2 rounded-lg items-center border-purple-600 text-purple-600"
                >
                    <h3 class=" capitalize text-sm">{wxp.language}</h3>
                    <div class="flex items-center gap-2">
                        <div class=" capitalize text-sm">{wxp.level}</div>
                        <button class="text-2xl text-red-400" onclick={() => delete_lang(wxp.id)}>&times;</button>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
