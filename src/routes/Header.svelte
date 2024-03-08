<script>
	import Login from '../lib/components/auth/Login.svelte';
	import Register from '../lib/components/auth/Register.svelte';
	import { goto, invalidateAll } from '$app/navigation';
	const { data } = $props();

	//console.log(data);
	let show_auth = $state(false);
	let sending = $state(false);
	let show_auth_login = $state(true);
	const switch_show_auth = () => (show_auth = !show_auth);
	const switch_show_auth_login = () => (show_auth_login = !show_auth_login);

	async function sign_out() {
		sending = true;
		const res = await fetch('/api/auth/signout', {
			method: 'GET',
		});
		const response = await res.json();
		if (response.susses) {
			await invalidateAll();
			goto('/');
		} else {
		}

		sending = false;
	}
</script>

<header class="play fixed top-0 left-0 w-full bg-white">
	<nav class="flex justify-between w-full items-center p-4">
		<a href="/" class="montserrat__ text-xl w-[100px] flex custom-text"
			><div class=" rotate-12 text-4xl font-bold hover:rotate-0 transition custom-text">R</div>
			<div class=" border-b pb-2 border-[#ff61cc]">esumer</div></a
		>
		<div class="flex gap-4 items-center overflow-visible">
			{#if data.user}
				<button onclick={sign_out} class="shadow-mine-grad capitalize py-1 px-3 flex justify-center gap-4">
					{#if sending}
						<span
							style="border-top-color:transparent"
							class="w-8 h-8 border-4 border-gray-800 border-solid rounded-full animate-spin block"
						></span>{:else}
						<span>@{data.user.username}</span>
						<span class="flex gap-1 items-center"
							>signout <iconify-icon icon="clarity:logout-solid"></iconify-icon></span
						>
					{/if}</button
				>
			{:else}
				<button class="shadow-mine-grad py-1 px-6" onclick={() => (show_auth = !show_auth)}> Login </button>
			{/if}
		</div>
	</nav>
</header>

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
