<script>
    import Project from './Project.svelte';

    import Education from './Education.svelte';

    import Experience from './Experience.svelte';

    const { id, resume, assign_select_to_state } = $props();

    let selected = $state(false);

    function switch_selected() {
        assign_select_to_state('summary', resume.summary, resume.id);
        selected = !selected;
    }
</script>

{#if resume}
    <section class="  text-sm h-[70vh] py-4 overflow-y-scroll" {id}>
        <section class="mt-6 px-6">
            {#if resume?.expand?.experience?.length > 0}
                <div>
                    <h1 class="font-bold mb-2 w-full pb-2 border-gray-300">Experience</h1>
                    <div class="mb-2">
                        {#each resume?.expand?.experience as exp}
                            <Experience {exp} {assign_select_to_state}></Experience>
                        {/each}
                    </div>
                </div>
            {/if}
            {#if resume?.expand?.education?.length > 0}
                <div class="mt-6">
                    <h1 class="font-bold mb-2 w-full pb-2">Education</h1>
                    <div>
                        {#each resume?.expand?.education as edu}
                            <Education {edu} {assign_select_to_state}></Education>
                        {/each}
                    </div>
                </div>
            {/if}
            {#if resume?.expand?.projects?.length > 0}
                <div class="mt-6">
                    <h1 class="font-bold mb-2 w-full pb-2">Projects</h1>
                    <div>
                        {#each resume?.expand?.projects as pro}
                            <Project {pro} {assign_select_to_state}></Project>
                        {/each}
                    </div>
                </div>
            {/if}

            {#if resume.summary.length > 0}
                <h1 class="font-bold mb-2 w-full pb-2 border-gray-300 mt-6">Summery</h1>
                <a href="#ai" type="button" onclick={switch_selected} class="w-full">
                    <section class="  border p-4 rounded-md relative hover:border-purple-600 focus:border-purple-600">
                        <div>
                            <p>
                                {resume.summary}
                            </p>
                        </div>
                        <button
                            class={`${selected ? 'custom-text' : 'special-texts-black text-transparent'} font-bold absolute top-3 right-3 text-xl`}
                            onclick={switch_selected}>AI</button
                        >
                    </section>
                </a>
            {/if}
        </section>

        <!-- <div class="w-full border-b my-4"></div> -->
    </section>
{/if}
