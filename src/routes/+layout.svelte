<script>
	import Header from './Header.svelte';

	import './styles.css';
	import './print.css';
	import 'iconify-icon';
	import Loader from '../lib/components/Loader.svelte';
	const { data } = $props();

	// console.log(data);
</script>

<section class="app overflow-hidden">
	<Header {data} />
	<Loader />
	<main id="main" class="py-20">
		<slot />
	</main>

	<footer class="border-t border-purple-300 bottom-0 left-0 w-full bg-white">
		<div class="w-full flex md:flex-row flex-col justify-between text-sm md:text-[15px]">
			<div class="text-center p-4">
				Partially built with <span class="custom-text">LOVE</span>.
			</div>
			<div class="text-center p-4">
				<span class="custom-text">Version: 0.9.9</span>
			</div>
			<div class="text-center p-4">
				Have any suggestion? <a href="https://twitter.com/programmer_dex" target="_blank" class="custom-text"
					>Hit me on X</a
				>.
			</div>
		</div>
	</footer>
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
