<script>
    import { page } from '$app/stores';
</script>

<section class="w-full h-screen grid place-content-center">
    <div class="flex flex-col items-center gap-3">
        <h1 class="font-bold text-5xl special-texts-black text-white">{$page.status}</h1>
        <p class="  text-3xl">
            {$page.error.message}
        </p>
        <a href="/" class="shadow-mine py-2 px-6 w-full flex justify-center"> Back home</a>
    </div>
</section>
