<script>
    import { page } from '$app/stores';
    import * as nav from '$app/navigation';

    $effect(() => {
        nav.onNavigate((e) => {
            console.log($page.url);
        });
    });
</script>

<section class="section flex gap-10">
    <aside class="md:flex flex-col gap-4 items-start hidden">
        <a
            href={`/edit/${$page?.params?.id}/personal_info`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/personal_info` && 'custom-text font-bold'}
            >Personal info</a
        >
        <a
            href={`/edit/${$page?.params?.id}/experience`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/experience` && 'custom-text font-bold'}
            >Experience</a
        >
        <a
            href={`/edit/${$page?.params?.id}/education`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/education` && 'custom-text font-bold'}
            >Education</a
        >
        <a
            href={`/edit/${$page?.params?.id}/projects`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/projects` && 'custom-text font-bold'}>Projects</a
        >
        <a
            href={`/edit/${$page?.params?.id}/certificates`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/certificates` && 'custom-text font-bold'}
            >Certificates</a
        >
        <a
            href={`/edit/${$page?.params?.id}/skills`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/skills` && 'custom-text font-bold'}>Skills</a
        >
        <a
            href={`/edit/${$page?.params?.id}/languages`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/languages` && 'custom-text font-bold'}>Language</a
        >
        <a
            href={`/edit/${$page?.params?.id}/summary`}
            class={$page.url.pathname === `/edit/${$page?.params?.id}/summary` && 'custom-text font-bold'}>Summary</a
        >
        <a href={`/preview/${$page?.params?.id}`}>Preview</a>
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
