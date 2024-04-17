<script>
	import Auth from './Auth.svelte';

	import { goto, invalidateAll } from '$app/navigation';

	const { data } = $props();

	let sending = $state(false);
	let show_option = $state(false);

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
		show_option = !show_option;
	}
</script>

{#if show_option}
	<button
		onclick={() => (show_option = !show_option)}
		class="fixed w-screen h-screen backdrop-blur-[4px] z-[100] bg-[#27272740] left-0 top-0"
	></button>
{/if}
{#if show_option}
	<div class=" absolute z-[105] bg-[#e1e1e1d1] right-4 top-20 flex-col flex rounded-md">
		<a class=" px-4 py-2 border-b" onclick={() => (show_option = !show_option)} href="/profile">My profile</a>
		<a class=" px-4 py-2 border-b" onclick={() => (show_option = !show_option)} href="/my-resumes">Resumes</a>
		<button onclick={sign_out} class=" px-4 py-2"
			>Signout <iconify-icon icon="clarity:logout-solid"></iconify-icon></button
		>
	</div>
{/if}
<header class="play fixed top-0 left-0 w-full bg-[#ffffff00] z-50 backdrop-blur-sm">
	<nav class="flex justify-between w-full items-center p-4">
		<a href="/" class="montserrat__ text-xl w-[100px] flex custom-text"
			><img src="/favicon.svg" alt="" class=" w-12 h-12" /></a
		>

		<div class="flex gap-4 items-center overflow-visible relative">
			{#if data?.user}
				<button
					onclick={() => (show_option = !show_option)}
					class="shadow-mine-grad capitalize py-1 px-3 flex justify-center gap-4"
				>
					{#if sending}
						<span
							style="border-top-color:transparent"
							class="w-8 h-8 border-4 border-gray-800 border-solid rounded-full animate-spin block"
						></span>{:else}
						<span>@{data.user.username}</span>
					{/if}</button
				>
			{:else}
				<Auth></Auth>
			{/if}
		</div>
	</nav>
</header>

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
