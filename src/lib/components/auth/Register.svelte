<script>
    // import { flip } from 'svelte/animate';
    // import { quadInOut } from 'svelte/easing';

    import Toast from '../Toast.svelte';

    let { switch_show_auth_login, switch_show_auth } = $props();

    let user_data = $state({ email: '', password: '', name: '', passwordConfirm: '' });
    let sending = $state(false);
    // let toast_state = $state({ message: 'not set', type: 'default', show_now: false });

    async function Register() {
        sending = true;
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(user_data),
        });

        const response = await res.json();
        if (response.susses) {
            //TODO:>>SHOW TOAST BEFORE SWITCHING
            switch_show_auth_login();
        } else {
        }

        sending = false;
    }
</script>

<div class="p-4 border-2 shadow-2xl rounded-lg bg-white w-[90%] md:w-[60%] lg:w-[40%] z-10">
    <h2 class=" text-3xl font-bold my-4 text-center">Register</h2>
    <form>
        <div class="flex flex-col gap-2">
            <span class=" font-semibold capitalize">Full Name</span>
            <input
                bind:value={user_data.name}
                placeholder="Full Name"
                class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                name="name"
                type="text"
                required
            />
        </div>
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
                name="password"
                type="password"
                required
            />
        </div>
        <div class="flex flex-col gap-2 my-4">
            <span class=" font-semibold capitalize">confirm password</span>
            <input
                bind:value={user_data.passwordConfirm}
                placeholder="******"
                class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                name="passwordConfirm"
                type="password"
                required
            />
        </div>

        <button
            class="w-full py-4 bg-gray-900 text-white rounded-lg my-4 hover:bg-gray-500 transition cursor-pointer flex justify-center shadow-mine-grad"
            onclick={Register}
            disabled={sending}
            type="submit"
        >
            {#if sending}
                <span
                    style="border-top-color:transparent"
                    class="w-8 h-8 border-4 border-white border-solid rounded-full animate-spin block"
                ></span>
            {:else}
                Register
            {/if}
        </button>

        <div class="flex gap-2">
            <span>Already have an account?</span>
            <button onclick={switch_show_auth_login} class="text-purple-600" type="button">Login</button>
        </div>
    </form>
</div>

<!-- {#if toast_state.show_now}
    <div><Toast message={toast_state.message} type={toast_state.type} bind:this={toast_state} /></div>
{/if} -->

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
