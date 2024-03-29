<script>
    import BackButton from './../../../lib/components/BackButton.svelte';
    import { page } from '$app/stores';
    import { update_resume } from '../../../lib/utils/ai_server_func';
    import { improve_with_ai } from '../../../lib/utils/ask_ai_for_help';
    import AIeditor from '../../../lib/components/preview/templates/ai/AIeditor.svelte';

    const id = '877xxy'; //TODO:::should change this.

    // const current_section = $state({ heading: 'Projects', content: '' });
    const result_type = ['grammar', 'professional'];
    const result_type_selected = $state(['professional']);
    let sending = $state(false);
    let sending_ai = $state(false);
    let contents = $state({ selected: '', content: '', id: '' });
    let updated_text = $state('');

    async function func_update_to_ai(params) {
        sending = !sending;
        // console.log(updated_text, contents);
        await update_resume(contents.selected, updated_text, contents.id);
        sending = !sending;
    }

    function assign_select_to_state(selected, content, id) {
        contents = {
            selected: selected,
            content: content,
            id: id,
        };
    }

    function set_prompt_type(rt) {
        const index = result_type_selected.indexOf(rt);
        if (index !== -1) {
            result_type_selected.splice(index, 1); // Remove the element using splice
        } else {
            result_type_selected.push(rt);
        }
    }

    async function aisify(rt, property) {
        sending_ai = true;
        const res = await improve_with_ai(contents.content, result_type_selected);
        // console.log(res, typeof res.data);
        if (typeof res.data === 'string') {
            updated_text = res.data;
        } else {
            updated_text = 'Network Error: Please Retry';
        }
        sending_ai = false;
    }
</script>

<section>
    <div class="p-4 flex gap-4 items-end">
        <BackButton /><span class="custom-text text-2xl font-bold">Ai-sify</span>
    </div>
    <section class="flex flex-col items-start h-full md:flex-row">
        <aside class="md:w-[20%]">
            <section class="flex flex-col gap-8 p-4">
                <div>
                    <h2 class="font-semibold text-2xl">Control how changes are being made.</h2>
                    <div class="grid grid-cols-2 gap-2 my-3">
                        {#each result_type as rt}
                            <button
                                onclick={() => set_prompt_type(rt)}
                                class={result_type_selected.includes(rt)
                                    ? ' shadow-mine-grad capitalize border rounded-full px-4 py-1'
                                    : 'capitalize border rounded-full px-4 py-1'}><small>{rt}</small></button
                            >
                        {/each}
                    </div>
                </div>
            </section>
        </aside>
        <section class="  p-4 md:w-1/2">
            <AIeditor resume={$page.data.resume} {id} {assign_select_to_state} />
        </section>
        <aside class="md:w-[30%] w-full" id="ai">
            <section class="flex flex-col gap-8 min-h-screen p-4">
                <div>
                    <h2 class=" text-xl mb-2">
                        Current <small class=" capitalize custom-text text-small">{contents.selected}</small>
                    </h2>
                    <div class=" border rounded-xl p-4" contenteditable="">
                        <p>{contents.content}</p>
                    </div>
                </div>

                <button class="shadow-mine-grad px-4 w-fit flex gap-3 py-1 items-center mx-auto" onclick={aisify}>
                    {#if sending_ai}
                        <span
                            style="border-top-color:transparent"
                            class="w-6 h-6 border-4 border-white border-solid rounded-full animate-spin block"
                        ></span>
                    {:else}
                        <span class="font-extrabold text-xl">&darr;</span>
                        <span>Ai-sify</span>
                    {/if}
                </button>

                <div>
                    <h2 class=" text-xl mb-2">
                        Ai-sified <small class=" capitalize custom-text text-small">{contents.selected} </small>
                    </h2>
                    <div class=" border rounded-xl p-4">
                        <textarea id="updated_text" bind:value={updated_text} class="w-full"></textarea>
                    </div>
                    <button
                        class="shadow-mine-grad px-4 w-fit flex gap-3 py-1 items-center my-4"
                        onclick={func_update_to_ai}
                    >
                        {#if sending}
                            <span
                                style="border-top-color:transparent"
                                class="w-6 h-6 border-4 border-white border-solid rounded-full animate-spin block"
                            ></span>
                        {:else}
                            <span>Use</span>
                        {/if}
                    </button>
                </div>
            </section>
        </aside>
    </section>
</section>
