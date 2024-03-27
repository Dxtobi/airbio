<script>
	import Auth from './Auth.svelte';

	import { goto, invalidateAll } from '$app/navigation';

	const { data } = $props();

	let sending = $state(false);
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

<header class="play fixed top-0 left-0 w-full bg-[#ffffff00] z-50 backdrop-blur-sm">
	<nav class="flex justify-between w-full items-center p-4">
		<a href="/" class="montserrat__ text-xl w-[100px] flex custom-text"
			><img src="/favicon.svg" alt="" class=" w-12 h-12" /></a
		>
		<div class="flex gap-4 items-center overflow-visible">
			{#if data?.user}
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
