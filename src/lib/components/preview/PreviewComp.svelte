<script>
    import { page } from '$app/stores';
    import TemplateDefault from './templates/TemplateDefault.svelte';
    import TemplatePreview0 from './templates/TemplatePreview0.svelte';
    import { print_doc } from '../../utils/to_pdf';
    const temps = [TemplateDefault, TemplatePreview0];

    const resume = $derived($page?.data?.resume);

    // let ref;

    // $inspect(resume);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-1 normal-font">
    {#each temps as Pdf, i}
        <div class=" hover-to-effect-child cursor-pointer relative">
            <div class=" absolute right-0 -top-[10px] to-effect-child">
                <button class="py-2 px-7 shadow-mine" onclick={() => print_doc(`resume-${i + 1}`)}>Download</button>
            </div>
            <Pdf id={`resume-${i + 1}`} {resume} />
        </div>
    {/each}
</div>
