<script>
    import { invalidateAll } from '$app/navigation';
    import { extractYearMonth } from './../../lib/utils/helpers.utils.js';
    import Toast from '../../lib/components/Toast.svelte';

    let show_new_model = $state(false);
    let new_name = $state('');
    let sending = $state(false);
    let toast = $state({ type: 'default', message: 'not set' });
    let show_toast = $state(false);
    let { data } = $props();

    // let all_re =
    let all_resume = $derived([...data?.data]);

    //  console.log(data);

    async function create_new_resume() {
        sending = true;
        const res = await fetch('/api/resume/new-resume', {
            method: 'POST',
            body: JSON.stringify(new_name),
        });

        const response = await res.json();
        if (response.susses) {
            //TODO:>>SHOW TOAST BEFORE SWITCHING
            toast = {
                message: response.message,
                type: 'good',
            };
            //  all_resume = [response.data, ...all_resume];
            show_new_model = false;
        } else {
        }
        new_name = '';
        invalidateAll();
        sending = false;
    }

    async function delete_resume(id) {
        sending = true;
        const res = await fetch('/api/resume/new-resume', {
            method: 'DELETE',
            body: JSON.stringify(id),
        });

        const response = await res.json();
        if (response.susses) {
            //TODO:>>SHOW TOAST BEFORE SWITCHING
            toast = {
                message: response.message,
                type: 'good',
            };

            // all_resume = response.data;
            show_new_model = false;
        } else {
        }

        invalidateAll();
        sending = false;
    }
</script>

<section class="section overflow-y-visible min-h-[100vh] py-4">
    <div class="flex justify-between w-full items-center">
        <h1 class="text-5xl font-bold custom-text">My Resumes</h1>
        <button class="py-1 px-6 shadow-mine" onclick={() => (show_new_model = !show_new_model)}>New &plus;</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 md:mt-20 gap-4 h-full overflow-visible">
        {#each all_resume as md}
            <div>
                <div
                    class="flex flex-col rounded-lg justify-between items-start min-h-56 border-t-2 border-b-2 p-4 transition hover:border-2 hover:border-purple-600"
                >
                    <div>
                        <h3 class="font-bold text-xl capitalize">{md.name}</h3>
                        <h4 class=" capitalize">{md.profession}</h4>
                        <small>{extractYearMonth(md.updated)}</small>
                    </div>

                    <div class="flex justify-between w-full items-center">
                        <a href={`/edit/${md.id}`} class="px-4 py-1 shadow-mine-grad text-white border rounded">Edit</a>
                        <a href={`/ai/${md.id}`} class="px-4 py-1 shadow-mine-grad text-white border rounded">Use Ai</a>
                        <button
                            class="py-1 px-4 font-bold text-2xl shadow-mine-red"
                            onclick={() => delete_resume(md.id)}
                        >
                            {#if sending}
                                <span
                                    style="border-top-color:transparent"
                                    class="w-8 h-8 border-4 border-gray-800 border-solid rounded-full animate-spin block"
                                ></span>{:else}
                                &times;
                            {/if}
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>
{#if show_new_model}
    <button
        class="fixed left-0 top-0 w-full h-full backdrop-blur-xl grid place-content-center"
        onclick={() => (show_new_model = !show_new_model)}
    ></button>
    <div
        class="border-2 border-gray-800 rounded p-6 fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] md:w-fit bg-white rounded-lg"
    >
        <h3 class="font-semibold text-2xl">New resume name</h3>
        <p>This would be use to recognize your Resumes easily.</p>
        <input
            bind:value={new_name}
            class="w-full rounded-lg border px-4 py-2 my-3 focus:border-2 focus:border-gray-950 transition"
            placeholder="Developer"
            name="resume_name"
            type="text"
        />
        <button class="py-3 px-6 shadow-mine flex justify-center" onclick={create_new_resume}>
            {#if sending}
                <span
                    style="border-top-color:transparent"
                    class="w-8 h-8 border-4 border-gray-800 border-solid rounded-full animate-spin block"
                ></span>{:else}
                Create
            {/if}</button
        >
    </div>
{/if}
{#if show_toast}
    <Toast message={toast.message} type={toast.type} bind:this={show_toast} />
{/if}
