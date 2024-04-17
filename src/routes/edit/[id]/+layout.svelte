<script>
    import { page } from '$app/stores';
    import * as nav from '$app/navigation';
    import BackButton from '../../../lib/components/BackButton.svelte';

   // console.log($page.data);
    $effect(() => {
        nav.onNavigate((e) => {
        //    console.log($page);
        });
    });
</script>

<section class="section flex gap-10">
    <aside class="md:flex flex-col gap-4 items-start hidden">
        <BackButton />
        <a
            href={`/edit/${$page?.params?.id}/personal_info`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/personal_info`
                ? ' font-bold border-l-purple-500 border-l-4 px-4'
                : 'border-l-transparent px-4 border-l-4'}>Personal info</a
        >
        <a
            href={`/edit/${$page?.params?.id}/experience`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/experience`
                ? ' font-bold border-l-purple-500 border-l-4 px-4'
                : 'border-l-transparent px-4 border-l-4'}>Experience</a
        >
        <a
            href={`/edit/${$page?.params?.id}/education`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/education`
                ? ' font-bold border-l-purple-500 border-l-4 px-4'
                : 'border-l-transparent px-4 border-l-4'}>Education</a
        >
        <a
            href={`/edit/${$page?.params?.id}/projects`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/projects`
                ? ' font-bold border-l-purple-500 border-l-4 px-4'
                : 'border-l-transparent px-4 border-l-4'}>Projects</a
        >
        <a
            href={`/edit/${$page?.params?.id}/certificates`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/certificates`
                ? ' font-bold border-l-purple-500 border-l-4 px-4'
                : 'border-l-transparent px-4 border-l-4'}>Certificates</a
        >
        <a
            href={`/edit/${$page?.params?.id}/skills`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/skills`
                ? ' font-bold border-l-purple-500 border-l-4 px-4'
                : 'border-l-transparent px-4 border-l-4'}>Skills</a
        >
        <a
            href={`/edit/${$page?.params?.id}/languages`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/languages`
                ? ' font-bold border-l-purple-500 border-l-4 px-4'
                : 'border-l-transparent px-4 border-l-4'}>Language</a
        >
        <a
            href={`/edit/${$page?.params?.id}/summary`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/summary`
                ? ' font-bold border-l-purple-500 border-l-4 px-4'
                : 'border-l-transparent px-4 border-l-4'}>Summary</a
        >
        <a
            href={`/ai/${$page?.params?.id}`}
            class={'custom-text font-bold relative border-l-transparent px-4 border-l-4'}
            >Aisify <span class="shadow-mine-grad w-2 h-2 bg-blue-400 absolute -right-1 top-2"></span>
        </a>
        <a href={`/preview/${$page?.params?.id}`} class="border-l-transparent px-4 border-l-4">Preview</a>
    </aside>
    <main class=" border rounded-lg p-4 flex-1">
        <slot />
    </main>
</section>

<style>
    #nav-move > span {
        transition: 1s;
        border-radius: 60px;
        /* transform-origin: center; */
    }

    #nav-move {
        transition: 1s;
        /* transform-origin: center; */
    }
</style>
