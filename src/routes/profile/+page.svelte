<script>
    import Skill from './../../lib/components/models/skill.svelte';
    import { update_record, delete_record } from '../../lib/utils/profile-action';
    //import { invalidateAll } from '$app/navigation';
    import { page } from '$app/stores';
    import Experience from '../../lib/components/models/experience.svelte';
    import Education from '../../lib/components/models/education.svelte';
    import Certificate from '../../lib/components/models/certificate.svelte';
    import Project from '../../lib/components/models/project.svelte';
    import Language from '../../lib/components/models/language.svelte';
    import { calcPercentage } from '../../lib/utils/helpers.utils';
    let { data } = $props();

    let models = $state({
        skills: false,
        project: false,
        experience: false,
        education: false,
        certificate: false,
        language: false,
    });
    function offModels() {
        models = {
            skills: false,
            project: false,
            experience: false,
            education: false,
            certificate: false,
            language: false,
        };
    }

    async function update_rec(collection, data) {
        await update_record(collection, data);
        //await invalidateAll();
    }
    const arraysLnt = calcPercentage($page.data);
    const wdt = `${arraysLnt.portfolioCompletion.toFixed(0)}%`;
    // console.log(Object.values(arraysLnt.completionData), Object.keys(arraysLnt.completionData));
</script>

{#if data?.error}
    <div class="text-center">
        <h1>Sorry Something went wrong</h1>
        <pre>{data.message}</pre>
    </div>
{:else}
    <section class="section overflow-y-visible min-h-[100vh] py-4">
        <div class="flex gap-10 flex-col md:flex-row">
            <div class=" w-full md:w-3/5">
                <!-- NAME BOARD -->
                <div class="p-4 flex justify-between bg-slate-100 rounded-lg">
                    <div class="">
                        <h2 class="text-[2rem] font-bold capitalize">Hi {data.user.name.split(' ')[0]}!</h2>
                        <div>It's good to see you again</div>
                        <!-- <div>
                            <div>
                                <div>Contacts</div>
                                <div>
                                   <input/><button>ADD</button>
                                </div>
                            </div>
                            <div></div>
                        </div> -->
                    </div>
                    <div class="w-fit h-fit border p-1 rounded-full bg-white">
                        <img src="/favicon.svg" alt="" class=" w-20 h-20 rounded-full" />
                    </div>
                </div>

                <!-- STATUS BOARD -->
                <div
                    class="p-4 flex flex-col gap-4 md:flex-row items-start justify-between bg-slate-800 text-white rounded-lg md:items-center my-4"
                >
                    <div class="">
                        <h2 class="text-[1rem] font-bold">Profile setup</h2>
                        <div>Profile progress</div>
                    </div>
                    <div class="flex justify-between gap-4 items-center w-full md:w-fit">
                        <div class={` md:w-60 h-2 rounded-full bg-white w-full anim-effect`}>
                            <div style="width: {wdt};" class={`h-full bg-purple-500 rounded-full `}></div>
                        </div>
                        <span>{arraysLnt.portfolioCompletion.toFixed(0)}%</span>
                    </div>

                    <!-- <button class="px-6 py-2 text-white bg-purple-500 rounded-md"> Continue</button> -->
                </div>
                <div class="my-6 p-4 bg-slate-100 rounded-md">
                    <div class="">
                        <div class="flex justify-between mb-4">
                            <h2 class=" font-bold text-2xl">Your skills {$page.data.skills.totalItems}</h2>
                            <button
                                onclick={() => (models.skills = !models.skills)}
                                class="px-3 py-1 text-white bg-purple-500 rounded-md">New skills</button
                            >
                        </div>
                        <div class=" flex flex-wrap gap-[4px]">
                            {#each $page.data.skills.items as dm}
                                <div
                                    class=" mr-2 px-3 py-1 rounded-full cursor-pointer bg-white hover:bg-slate-100 flex justify-between gap-3 items-center"
                                >
                                    <span> {dm.type}</span>
                                    <button
                                        onclick={() => delete_record('skill', dm.id)}
                                        class="hover:scale-[2] hover:text-red-500 transition">&times;</button
                                    >
                                </div>
                            {/each}
                        </div>
                    </div>

                    <div class="mt-6">
                        <div class="flex justify-between mb-4">
                            <h2 class=" font-bold text-2xl">Language {$page.data.language.totalItems}</h2>
                            <button
                                onclick={() => (models.language = !models.language)}
                                class="px-3 py-1 text-white bg-purple-500 rounded-md">Add</button
                            >
                        </div>
                        <div class=" flex flex-wrap gap-[4px]">
                            {#each $page.data.language.items as dm}
                                <div
                                    class=" mr-2 px-3 py-1 rounded-full cursor-pointer bg-white hover:bg-slate-100 flex justify-between gap-3 items-center"
                                >
                                    <span class=" capitalize"> {dm.language}</span>
                                    <button
                                        onclick={() => delete_record('language', dm.id)}
                                        class="hover:scale-[2] hover:text-red-500 transition">&times;</button
                                    >
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>

                <div class="my-6 p-4 bg-slate-200 rounded-md">
                    <div class=" flex flex-wrap gap-[4px]">
                        <div class="bg-white rounded-md h-fit">
                            <div class="flex items-center gap-4 px-3 py-1 justify-between">
                                <div class="flex items-center gap-4">
                                    <h2 class="font-bold text-4xl">{$page.data.experience.totalItems}</h2>
                                    <h3>Experience</h3>
                                </div>
                                <button class="hover:scale-[2]" onclick={() => (models.experience = !models.experience)}
                                    ><iconify-icon icon="basil:edit-solid"></iconify-icon></button
                                >
                            </div>
                            <div class=" flex flex-wrap gap-[4px]">
                                {#each $page.data.experience.items as dm}
                                    <div
                                        class=" mr-2 px-3 py-1 rounded-full cursor-pointer bg-white hover:bg-slate-100 flex justify-between gap-3 items-center"
                                    >
                                        <span class=" capitalize"> {dm.company}</span>
                                        <button
                                            onclick={() => delete_record('experience', dm.id)}
                                            class="hover:scale-[2] hover:text-red-500 transition">&times;</button
                                        >
                                    </div>
                                {/each}
                            </div>
                        </div>
                        <div class="bg-white rounded-md h-fit">
                            <div class="flex items-center gap-4 bg-white rounded-full px-3 py-1 justify-between">
                                <div class="flex items-center gap-4">
                                    <h2 class="font-bold text-4xl">{$page.data.projects.totalItems}</h2>
                                    <h3>Projects</h3>
                                </div>
                                <button onclick={() => (models.project = !models.project)} class="hover:scale-[2]"
                                    ><iconify-icon icon="basil:edit-solid"></iconify-icon></button
                                >
                            </div>
                            <div class=" flex flex-wrap gap-[4px]">
                                {#each $page.data.projects.items as dm}
                                    <div
                                        class=" mr-2 px-3 py-1 rounded-full cursor-pointer bg-white hover:bg-slate-100 flex justify-between gap-3 items-center"
                                    >
                                        <span class=" capitalize"> {dm.name}</span>
                                        <button
                                            onclick={() => delete_record('projects', dm.id)}
                                            class="hover:scale-[2] hover:text-red-500 transition">&times;</button
                                        >
                                    </div>
                                {/each}
                            </div>
                        </div>
                        <div class="bg-white rounded-md h-fit">
                            <div class="flex items-center gap-4 bg-white rounded-full px-3 py-1 justify-between">
                                <div class="flex items-center gap-4">
                                    <h2 class="font-bold text-4xl">{$page.data.education.totalItems}</h2>
                                    <h3>Education</h3>
                                </div>
                                <button onclick={() => (models.education = !models.education)} class="hover:scale-[2]"
                                    ><iconify-icon icon="basil:edit-solid"></iconify-icon></button
                                >
                            </div>

                            <div class=" flex flex-wrap gap-[4px]">
                                {#each $page.data.education.items as dm}
                                    <div
                                        class=" mr-2 px-3 py-1 rounded-full cursor-pointer bg-white hover:bg-slate-100 flex justify-between gap-3 items-center"
                                    >
                                        <span class=" capitalize"> {dm.school}</span>
                                        <button
                                            onclick={() => delete_record('education', dm.id)}
                                            class="hover:scale-[2] hover:text-red-500 transition">&times;</button
                                        >
                                    </div>
                                {/each}
                            </div>
                        </div>
                        <div class="bg-white rounded-md h-fit">
                            <div class="flex items-center gap-4 bg-white rounded-full px-3 py-1 justify-between">
                                <div class="flex items-center gap-4">
                                    <h2 class="font-bold text-4xl">{$page.data.certificates.totalItems}</h2>
                                    <h3>Certificates</h3>
                                </div>
                                <button
                                    onclick={() => (models.certificate = !models.certificate)}
                                    class="hover:scale-[2]"
                                    ><iconify-icon icon="basil:edit-solid"></iconify-icon></button
                                >
                            </div>
                            <div class=" flex flex-wrap gap-[4px]">
                                {#each $page.data.certificates.items as dm}
                                    <div
                                        class=" mr-2 px-3 py-1 rounded-full cursor-pointer bg-white hover:bg-slate-100 flex justify-between gap-3 items-center"
                                    >
                                        <span class=" capitalize"> {dm.name}</span>
                                        <button
                                            onclick={() => delete_record('certificate', dm.id)}
                                            class="hover:scale-[2] hover:text-red-500 transition">&times;</button
                                        >
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-2/5">
                <div class="bg-gray-200 p-4 rounded-md">
                    <h2 class="font-semibold text-xl mb-6">Jobs requirements Vs Current skill level</h2>
                    <div class="p-4 bg-yellow-300 hover:bg-yellow-400 mb-2 rounded-md">
                        <div class="flex justify-between items-center">
                            <div>
                                <div class="font-bold text-2xl">Portfolio</div>
                                <div class="text-gray-600">Track</div>
                            </div>
                            <div class="font-bold text-5xl">
                                {arraysLnt.portfolioCompletion.toFixed(0)}%
                            </div>
                        </div>
                        <div class="flex gap-2 h-52 mt-3 justify-evenly">
                            <div class="h-full flex flex-col items-center justify-end">
                                <div
                                    style={`height:${arraysLnt.completionData.certificates}% `}
                                    class={`anim-effect-h bg-gray-700 hover:bg-black  w-[30px] rounded-lg`}
                                ></div>
                                <div class=" -rotate-12">Certs</div>
                            </div>
                            <div class="h-full flex flex-col items-center justify-end">
                                <div
                                    style={`height:${arraysLnt.completionData.projects}% `}
                                    class={`anim-effect-h bg-gray-700 hover:bg-black  w-[30px] rounded-lg`}
                                ></div>
                                <div class=" -rotate-12">Proj</div>
                            </div>
                            <div class="h-full flex flex-col items-center justify-end">
                                <div
                                    style={`height:${arraysLnt.completionData.experience}% `}
                                    class={`anim-effect-h bg-gray-700 hover:bg-black  w-[30px] rounded-lg`}
                                ></div>
                                <div class=" -rotate-12">Exp</div>
                            </div>
                            <div class="h-full flex flex-col items-center justify-end">
                                <div
                                    style={`height:${arraysLnt.completionData.skills}% `}
                                    class={`anim-effect-h bg-gray-700 hover:bg-black  w-[30px] rounded-lg`}
                                ></div>
                                <div class=" -rotate-12">Skills</div>
                            </div>
                            <div class="h-full flex flex-col items-center justify-end">
                                <div
                                    style={`height:${arraysLnt.completionData.language}% `}
                                    class={`anim-effect-h bg-gray-700 hover:bg-black  w-[30px] rounded-lg`}
                                ></div>
                                <div class=" -rotate-12">Lang</div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class=" flex flex-wrap gap-[4px]">
                        <div
                            class="per w-full md:w-[45%] text-white rounded-lg min-h-[250px] grid place-content-center"
                            style={`--dx-color:#880af9`}
                        >
                            <div class="flex flex-col gap-4 items-center">
                                <div
                                    class="pro-bar rounded-full w-20 h-20 relative flex justify-center items-center"
                                    style={` --deg:${230}deg; --lin-color:#880af9`}
                                >
                                    <h2 class="relative z-50">90%</h2>
                                </div>
                                <h2 class="font-bold text-center">Web Developer</h2>
                            </div>
                        </div>
                        <div
                            class="per w-full md:w-[45%] text-white rounded-lg min-h-[250px] grid place-content-center"
                            style={`--dx-color:#b229e9`}
                        >
                            <div class="flex flex-col gap-4 items-center">
                                <div
                                    class="pro-bar rounded-full w-20 h-20 relative flex justify-center items-center"
                                    style={` --deg:${80}deg; --lin-color:#b229e9 `}
                                >
                                    <h2 class="relative z-50">30%</h2>
                                </div>
                                <h2 class="font-bold text-center">Product Designer</h2>
                            </div>
                        </div>
                        <div
                            class="per w-full md:w-[45%] text-white rounded-lg min-h-[250px] grid place-content-center"
                            style={`--dx-color:rgb(240 86 210)`}
                        >
                            <div class="flex flex-col gap-4 items-center">
                                <div
                                    class="pro-bar rounded-full w-20 h-20 relative flex justify-center items-center"
                                    style={` --deg:${200}deg; --lin-color:rgb(240 86 210) `}
                                >
                                    <h2 class="relative z-50">70%</h2>
                                </div>
                                <h2 class="font-bold text-center">SEO Engineer</h2>
                            </div>
                        </div>
                    </div> -->
                    <!-- <button class="px-6 py-2 text-white bg-purple-500 rounded-md my-4"> Update skills</button> -->
                </div>
            </div>
        </div>
    </section>
{/if}

{#if models.skills}
    <Skill {offModels} {update_rec} />
{/if}
{#if models.experience}
    <Experience {offModels} {update_rec} />
{/if}
{#if models.education}
    <Education {offModels} {update_rec} />
{/if}
{#if models.certificate}
    <Certificate {offModels} {update_rec} />
{/if}
{#if models.project}
    <Project {offModels} {update_rec} />
{/if}
{#if models.language}
    <Language {offModels} {update_rec} />
{/if}

<style>
    .pro-bar {
        background: conic-gradient(rgb(255, 255, 255) var(--deg), rgb(59, 59, 59) 0deg);
        /* box-shadow: 0px 1px 20px -5px #530a95; */
    }

    .pro-bar::before {
        content: '';
        width: 70px;
        height: 70px;
        border-radius: 50%;
        position: absolute;
        background: rgb(104, 104, 104);
        /* box-shadow: 0px 1px 20px -5px #530a95; */
    }
    .per {
        background: #1e293b;
        padding: 4px;
    }
    /* button:hover {
        transform: scale(1.1);
        transition: 150ms;
    } */
</style>
