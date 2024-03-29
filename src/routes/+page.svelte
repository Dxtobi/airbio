<script>
	import Auth from './Auth.svelte';

	const { data } = $props();

	// $inspect(data);
</script>

<!-- <section class="main">
	<a href="/my-resumes">MY resumes</a> class="special-texts-black text-shadow-mine text-white"
</section> -->
<section class=" body-font section overflow-visible min-h-screen">
	<div class="flex flex-col md:flex-row gap-8">
		<div class=" w-full">
			<h2 class="text-[3rem] md:text-[5rem] w-full font-bold cursor-not-allowed">
				Struggling to <span class="custom-text">Craft a Resume</span> That Gets Noticed?
			</h2>
			<div class="flex flex-col gap-8 items-center text-center md:items-start md:text-start my-3">
				{#if data.user}
					<a href="/my-resumes" class="shadow-mine-grad py-2 px-4 w-full text-center">Go to files</a>
				{:else}
					<Auth />
				{/if}
			</div>
			<div class=" w-fit my-4 justify-between flex">
				<div class="flex items-center py-1 px-4 custom-text gap-1">
					<span class="font-bold text-3xl lobster">2</span>
					Template
				</div>
				<div class="flex items-center gap-2 py-1 px-4 custom-text">
					<span class="font-bold text-3xl lobster">{data?.counts?.users}</span>
					Users
				</div>
				<div class="flex items-center py-1 px-4 custom-text gap-1">
					<span class="font-bold text-3xl lobster">{data?.counts?.resumes}</span>
					Resumes
				</div>
			</div>
		</div>

		<div class=" gap-3 my-8 overflow-visible w-full">
			<div class="flex flex-col gap-8 md:px-4">
				<div class=" columns-1 md:columns-2 gap-3">
					<div class=" rounded-xl p-4 border border-[#d63cf5] border-dashed">
						<h3 class=" text-[1.3rem] md:text-[2rem] game">
							AI Highlights<br /> Your Skills & Achievements <br /> for<br />
							<span class="custom-text"> Maximum Impact.</span>
						</h3>
					</div>

					<div class="rounded-xl border border-[#ffa04c] p-4 my-3 border-dashed">
						<h3 class=" text-[1.3rem] md:text-[2rem] game">
							Land More <span class="custom-text">Interviews</span>
						</h3>
					</div>
					<div class=" rounded-xl p-4 my-3 border border-purple-500 border-dashed">
						<h3 class=" text-[1.3rem] md:text-[2rem] game">
							Unlock Your Dream Job with <span class="custom-text">AI-Powered</span> Resume Building
						</h3>
					</div>
				</div>
			</div>
		</div>
	</div>

	<br />
	<br />
	<br />
	<h2 class="text-3xl font-bold">Tips on building a good resume that will get noticed:</h2>
	<br />

	<div
		class="w-full bg-gray-950 text-gray-300 rounded-xl p-4 tips grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
	>
		<div>
			<h2 class="text-2xl font-bold">Tailor Your Resume:</h2>
			<p>
				Don't use a one-size-fits-all approach. For each job application, tailor your resume to highlight the
				skills and experiences most relevant to the specific position. Read the job description carefully and
				use keywords throughout your resume that match the requirements.
			</p>
		</div>
		<div>
			<h2 class="text-2xl font-bold">Focus on Achievements:</h2>
			<p>
				Go beyond simply listing your responsibilities. Instead, showcase your accomplishments in each role. Use
				action verbs and quantifiable metrics to demonstrate the impact you made. For example, instead of saying
				"managed social media accounts," say "Increased social media engagement by 20% through targeted content
				campaigns."
			</p>
		</div>
		<div>
			<h2 class="text-2xl font-bold">ATS Optimization:</h2>
			<p>
				Applicant tracking systems (ATS) are used by many companies to scan resumes for keywords and
				qualifications. Use relevant keywords from the job description throughout your resume, but avoid keyword
				stuffing that reads unnaturally.
			</p>
		</div>
		<div>
			<h2 class="text-2xl font-bold">Formatting and Readability:</h2>
			<p>
				Your resume should be easy to read and scannable. Use a clear and consistent format with headings,
				bullet points, and white space. Choose a professional and easy-to-read font. Keep your resume concise,
				ideally one to two pages long.
			</p>
		</div>
		<div>
			<h2 class="text-2xl font-bold">Proofread Carefully:</h2>
			<p>
				Typos and grammatical errors can make a bad impression. Proofread your resume carefully before
				submitting it, and consider having someone else review it as well.
			</p>
		</div>
	</div>
</section>

<style>
	h2,
	h3 {
		line-height: normal;
	}

	.tips div:hover {
		color: white;
	}
</style>
