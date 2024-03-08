<script>
    import { extractYearMonth } from '../../../utils/helpers.utils';

    const { id, resume } = $props();

    //  $inspect(resume);
</script>

{#if resume}
    <section class="h-fit border text-sm" {id}>
        <div class="w-full bg-slate-100 p-6">
            <h1 class="font-bold text-4xl capitalize">{resume?.first_name} {resume.second_name}</h1>
            <h1 class="font-semibold capitalize text-xl">{resume?.profession}</h1>
            <div class="flex gap-4">
                <span>Email: {resume.email}</span>
                <span>Website: {resume.website}</span>
            </div>
        </div>
        <section class="mt-6 px-6">
            <div>
                <h1 class="font-bold text-xl mb-2 w-full border-b pb-2 border-gray-300">Experience</h1>
                <div class="mb-2">
                    {#if resume?.expand?.experience}
                        {#each resume?.expand?.experience as exp}
                            <div class="my-2">
                                <div class="flex flex-col">
                                    <h2 class="font-bold text-xl capitalize">{exp.job_title}</h2>
                                    <i> {extractYearMonth(exp.ended)}</i>
                                </div>
                                <p>
                                    {exp.more_details}
                                </p>
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="mt-6">
                <h1 class="font-bold text-xl mb-2 w-full border-b pb-2 border-gray-300">Education</h1>
                <div>
                    {#if resume?.expand?.education}
                        {#each resume?.expand?.education as edu}
                            <div class="my-2">
                                <div class="font-bold text-xl capitalize">
                                    <span>{edu.school}</span> -
                                    <span>{edu.course}</span>
                                </div>
                                <i> {extractYearMonth(edu.end)}</i>
                                <p>
                                    {edu.more_details}
                                </p>
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="mt-6">
                <h1 class="font-bold text-xl mb-2 w-full border-b pb-2 border-gray-300">Projects</h1>
                <div>
                    {#if resume?.expand?.projects}
                        {#each resume?.expand?.projects as pro}
                            <div class="my-2">
                                <div class="font-bold text-xl capitalize">
                                    <span>{pro.name}</span>
                                </div>
                                <p>
                                    {pro.details}
                                </p>
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>
        </section>
        <div class="w-full border-b my-4"></div>
        <section class=" flex justify-between px-6">
            <div>
                <h1 class="font-bold text-xl mb-2 w-full border-b pb-2 border-gray-300">Skills</h1>
                <div class="grid grid-flow-col gap-2">
                    {#if resume.expand?.skills}
                        {#each resume.expand?.skills as skill}
                            <div class="flex capitalize items-center justify-center w-fit rounded-full px-3 border">
                                <span>{skill.type}</span>
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>

            <div>
                <h1 class="font-bold text-xl mb-2 w-full border-b pb-2 border-gray-300">Language</h1>
                {#if resume.expand?.languages}
                    {#each resume.expand?.languages as lang}
                        <div class="flex gap-2 capitalize">
                            <span>{lang.language}</span>-<span>{lang.level}</span>
                        </div>
                    {/each}
                {/if}
            </div>
        </section>
        <div class="w-full border-b my-4"></div>

        <section class=" px-6 pb-4">
            <div>
                <h1 class="font-bold text-xl mb-2 w-full border-b pb-2 border-gray-300">Certificates</h1>
                {#if resume.expand?.certificates}
                    {#each resume.expand?.certificates as cert}
                        <div class="flex gap-2 capitalize">
                            <span>{cert.name}</span>-<span>{cert.awarded_by}</span>
                        </div>
                    {/each}
                {/if}
            </div>
        </section>
        <div class="w-full border-b my-4"></div>
        <section class=" px-6 pb-4">
            <div>
                <h1 class="font-bold text-xl mb-2 w-full border-b pb-2 border-gray-300">Summery</h1>
                <p>
                    {resume.summary}
                </p>
            </div>
        </section>
    </section>
{/if}
