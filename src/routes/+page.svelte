<script>
	const { data } = $props();

	//$inspect(data);
</script>

<!-- <section class="main">
	<a href="/my-resumes">MY resumes</a> class="special-texts-black text-shadow-mine text-white"
</section> -->
<section class="text-gray-600 body-font section overflow-visible min-h-screen">
	<div>
		<h2 class="text-[4rem] w-full text-center custom-text font-bold cursor-not-allowed">Resume maker</h2>
		<h3 class="text-center">Create resumes withing minutes</h3>
	</div>

	<div class="flex flex-col md:flex-row justify-center items-center gap-3 my-8 overflow-visible">
		<div class="flex flex-col gap-8 items-center text-center md:items-start md:text-start md:px-4">
			<div class="w-fit rounded-full px-4 py-2 border border-[#ff61cc] text-center cursor-help">AI powered.</div>
			<p>Resume maker makes use of AI technology to improve your resume (up coming version).</p>
			<a href="/my-resumes" class="shadow-mine-grad py-2 px-4 w-fit">Try For free</a>
		</div>
		<div class="w-full h-[50vh] bg-purple-50 rounded-3xl shadow-xl">
			<img src="/rbt.jpg" alt="" class="w-full h-full object-cover rounded-3xl" />
		</div>
		<div class="flex flex-col gap-8 items-end text-end md:px-4">
			<div class="w-fit rounded-full px-4 border border-[#ff61cc] text-center cursor-help py-2">
				Add your resume template.
			</div>
			<p>can you code HTML and css? if yes then soon you would be able to add and share your resume templates.</p>
			<a href="#me" id="me" class="shadow-mine-grad py-2 px-4 w-fit cursor-not-allowed" aria-disabled="true"
				>Coming soon</a
			>
		</div>
	</div>

	<div class="rounded-full w-fit m-auto flex my-4 border-purple-600 justify-between border">
		<div class="flex items-center py-1 px-4 custom-text gap-1">
			<span class="font-bold text-3xl">2</span>
			Template
		</div>
		<div class="flex items-center gap-2 shadow-mine-grad py-1 px-4">
			<span class="font-bold text-3xl">{data?.counts?.users}</span>
			<iconify-icon class=" text-3xl" icon="solar:users-group-two-rounded-line-duotone"></iconify-icon>
		</div>
		<div class="flex items-center py-1 px-4 custom-text gap-1">
			<span class="font-bold text-3xl">{data?.counts?.resumes}</span>
			Resumes
		</div>
	</div>
</section>

<style>
	h2,
	h3 {
		line-height: normal;
	}
</style>
