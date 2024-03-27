<script>
    import { fade } from 'svelte/transition';

    let { message, type } = $props();
    // console.log(type);
</script>

<div class="w-fit md:w-[40%] fixed right-4 top-3 z-[100] capitalize" transition:fade>
    {#if type === 'saved'}
        <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-2 rounded-full" role="alert">
            <p class="font-bold">
                {message}
            </p>
        </div>
    {/if}

    {#if type === 'not-saved'}
        <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-2 rounded-full" role="alert">
            <p class="font-bold">
                {message}
            </p>
        </div>
    {/if}

    {#if type === 'required'}
        <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-2 rounded-full" role="alert">
            <p class="font-bold">
                {message}
            </p>
        </div>
    {/if}

    {#if type === 'default'}
        <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-2 rounded-full" role="alert">
            <p class="font-bold">
                {message}
            </p>
        </div>
    {/if}
</div>
