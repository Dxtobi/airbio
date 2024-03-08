<script>
    import PreviewComp from '../../../lib/components/preview/PreviewComp.svelte';

    import BackButton from '../../../lib/components/BackButton.svelte';

    const { data } = $props();
    //  console.log(data.resume);
</script>

<section class="section w-full">
    <div class="flex gap-4 items-center mb-10">
        <BackButton></BackButton>
        <h1 class="font-bold text-4xl">Preview</h1>
    </div>

    {#if data}
        <section class="grid grid-cols-1 gap-4">
            <PreviewComp></PreviewComp>
        </section>
    {:else}
        <div>No Data</div>
    {/if}
</section>
