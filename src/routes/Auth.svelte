<script>
    // import { page } from '$app/stores';
    import Login from '../lib/components/auth/Login.svelte';
    import Register from '../lib/components/auth/Register.svelte';
    let show_auth = $state(false);
    let show_auth_login = $state(true);
    const switch_show_auth = () => (show_auth = !show_auth);
    const switch_show_auth_login = () => (show_auth_login = !show_auth_login);
</script>

<button class="shadow-mine-grad py-1 px-6" onclick={() => (show_auth = !show_auth)}> Try for free </button>
{#if show_auth}
    <div class="h-screen w-screen fixed left-0 top-0 backdrop-blur-[20px] flex justify-center items-center">
        <div class="h-full w-full relative flex justify-center items-center">
            {#if show_auth_login}
                <Login {switch_show_auth_login} {switch_show_auth}></Login>
            {:else}
                <Register {switch_show_auth_login} {switch_show_auth}></Register>
            {/if}

            <button class=" absolute w-full h-full z-0" onclick={switch_show_auth}></button>
        </div>
    </div>
{/if}
