<script>
    import { extractYearMonth } from '../../../utils/helpers.utils';

    const { id, resume } = $props();

    //  $inspect(resume);
</script>

<section {id} class=" border h-fit text-sm">
    <div class="p-5 bg-slate-200">
        <h2 class="font-bold text-3xl text-wrap w-full bg-slate-200 capitalize">
            {resume.first_name}
            {resume.second_name}
        </h2>

        <span class=" capitalize">{resume.profession}</span>
        <span class="flex justify-between">
            <span class="text-wrap w-fit text-sm">{resume.email}</span>
            <span class="text-wrap text-sm">{resume.website}</span></span
        >
    </div>
    <div class="flex items-start">
        <aside class=" bg-slate-100 pl-5">
            <div class="mt-4 bg-slate-100 py-2">
                <h2 class="font-bold capitalize">Skills</h2>
                <div class=" grid grid-cols-2 gap-2">
                    <!-- //LOOP STARTS HERE -->
                    {#if resume?.expand?.skills}
                        {#each resume?.expand.skills as skill}
                            <div class="flex gap-2 capitalize border rounded-full px-3 w-fit">
                                <h3 class="">{skill.type}</h3>
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="mt-4 bg-slate-50 py-2">
                <h2 class="font-bold capitalize">Language</h2>
                <div class="flex-col flex">
                    <!-- //LOOP STARTS HERE -->
                    {#if resume?.expand?.languages}
                        {#each resume.expand.languages as lang}
                            <div class="flex gap-2 capitalize">
                                <h3 class="">{lang.language}:</h3>
                                <h2>{lang.level}</h2>
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="mt-4 bg-slate-50 py-2">
                <h2 class="font-bold capitalize">Certifications</h2>
                <div class="flex-col flex">
                    <!-- //LOOP STARTS HERE -->
                    {#if resume?.expand?.certificates}
                        {#each resume.expand.certificates as cert}
                            <div class="flex gap-2 capitalize">
                                <h3 class="">{cert.name}:</h3>
                                <h2>{cert.awarded_by}</h2>
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>
        </aside>

        <section class="flex-1 py-4 px-1 w-full">
            <div>
                <h1 class="text-xl font-bold">Experience</h1>
                <div class="flex flex-col gap-2">
                    <!-- //LOOP STARTS HERE -->

                    {#if resume?.expand?.experience}
                        {#each resume?.expand.experience as exp}
                            <div>
                                <div>
                                    <span class="font-bold capitalize">{exp.job_title}</span>
                                    <span class=" text-xs">{extractYearMonth(exp.started)}</span>
                                    -
                                    <i class="text-xs">{extractYearMonth(exp.ended)}</i>
                                </div>
                                <p>
                                    {exp.more_details}
                                </p>
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>

            <div class="mt-4">
                <h1 class="text-xl font-bold">Education</h1>
                <div class="flex flex-col gap-2">
                    <!-- //LOOP STARTS HERE -->

                    {#if resume?.expand?.education}
                        {#each resume.expand.education as edu}
                            <div>
                                <div>
                                    <span class="font-bold capitalize">{edu.school}</span> -
                                    <span class="font-bold">{edu.course}</span>
                                    <br /> <i> {extractYearMonth(edu.ended)}</i>

                                    <i class="text-xs">{extractYearMonth(edu.end)}</i>
                                </div>
                                <p>
                                    {edu.more_details}
                                </p>
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="mt-4">
                <h1 class="text-xl font-bold">Projects</h1>
                <div class="flex flex-col gap-2">
                    <!-- //LOOP STARTS HERE -->

                    {#if resume?.expand?.projects}
                        {#each resume.expand.projects as pro}
                            <div>
                                <div>
                                    <span class="font-bold capitalize">{pro.name}</span> -
                                </div>
                                <p>
                                    {pro.more_details}
                                </p>
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>

            <div class="mt-4">
                <h1 class="text-xl font-bold">Summary</h1>
                <div class="flex flex-col">
                    {resume.summary}
                </div>
            </div>
        </section>
    </div>
</section>
