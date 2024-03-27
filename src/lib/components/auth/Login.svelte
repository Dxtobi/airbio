<script>
    import { invalidateAll } from '$app/navigation';
    let { switch_show_auth_login, switch_show_auth } = $props();
    let user_data = $state({ email: '', password: '' });
    let sending = $state(false);
    let error = $state({ error: false, message: '' });
    async function Login() {
        sending = true;
        error = { error: false, message: '' };
        try {
            const res = await fetch('/api/auth/login', {
                method: 'PUT',
                body: JSON.stringify(user_data),
            });

            const resp = await res.json();
            if (resp.susses) {
                await invalidateAll();
                switch_show_auth();
            } else {
                console.log(resp);
                error = {
                    error: resp.error,
                    message: resp.message,
                };
            }
        } catch (e) {
            console.log(e);
        }
        sending = false;
    }
</script>

<div class="p-4 border-2 shadow-2xl rounded-lg bg-white w-[90%] md:w-[50%] lg:w-[30%] z-10">
    <h2 class=" text-3xl font-bold my-4 text-center">Login</h2>
    <form on:submit|preventDefault={Login}>
        <div class="flex flex-col gap-2">
            <span class=" font-semibold capitalize">email</span>
            <input
                bind:value={user_data.email}
                placeholder="mrdev@email.com"
                class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                name="email"
                type="email"
                required
            />
        </div>
        <div class="flex flex-col gap-2 my-4">
            <span class=" font-semibold capitalize">password</span>
            <input
                bind:value={user_data.password}
                placeholder="******"
                class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                name="job_title"
                required
                type="password"
            />
        </div>

        <div class="py-3 text-red-600 text-sm">
            {#if error.error}
                <span>{error.message}</span>
            {/if}
        </div>
        <!--  -->
        <button
            class="w-full py-4 bg-gray-900 text-white rounded-lg my-4 hover:bg-gray-500 transition cursor-pointer flex justify-center shadow-mine-grad"
            onclick={Login}
            disabled={sending}
            type="submit"
        >
            {#if sending}
                <span
                    style="border-top-color:transparent"
                    class="w-8 h-8 border-4 border-white border-solid rounded-full animate-spin block"
                ></span>
            {:else}
                Log in
            {/if}
        </button>

        <div class="flex gap-2">
            <span>Already have an account?</span>
            <button onclick={switch_show_auth_login} class="text-purple-600" type="button">Register</button>
        </div>
    </form>
</div>

<style>
    .inner-strip {
        width: 100%;
        height: 70px;
        /* transform-origin: 50% 0; */

        position: absolute;
        top: 47%;
        right: 50%;
        transform: translate(0, 0%);
        transform-origin: right;
        display: flex;
        overflow: visible;
    }

    .is-2 {
        transform: rotate(20deg);
    }

    .is-3 {
        transform: rotate(-20deg);
    }
    .first {
        width: 50%;
        padding: 10px;
        font-size: 3rem;
        overflow: visible;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .second {
        width: 50%;
        overflow: visible;
        display: flex;
        justify-content: inherit;
        align-items: center;
    }
</style>
