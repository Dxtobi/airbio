<script>
    import TemplatePreview0 from '../../../lib/components/preview/templates/TemplatePreview0.svelte';
    import { page } from '$app/stores';
    import { print_doc } from '../../../lib/utils/to_pdf';
    const id = '877xxy';
    // const temps = [TemplatePreview0];
    // $inspect($page.data.resume);
</script>

<section class="flex flex-col items-center h-full">
    <a href={`/edit/${$page.data.resume.id}/personal_info`} class=" py-3 px-6 shadow-mine w-fit">Get started</a>
    <section class="lg:w-[70%] md:w-[95%] m-auto p-4">
        <div class="relative hover-to-effect-child cursor-pointer">
            <div class=" absolute right-0 -top-[2%] to-effect-child">
                <button class="py-2 px-7 shadow-mine" onclick={() => print_doc(id)}>Download</button>
            </div>
            <TemplatePreview0 resume={$page.data.resume} {id} />
        </div>
    </section>
</section>
