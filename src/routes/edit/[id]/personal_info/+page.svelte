<script>
    import { page } from '$app/stores';
    import Toast from '../../../../lib/components/Toast.svelte';
    import { submit_form_PI } from '../../../../lib/utils/server-actions';
    let show_toast = $state(false);
    let alert = $state({ type: 'default', message: 'no message was passed' });
    //console.log($page.data.resume);
    let personal_details = $derived({
        first_name: $page.data.resume.first_name,
        second_name: $page.data.resume.second_name,
        profession: $page.data.resume.profession,
        email: $page.data.resume.email,
        website: $page.data.resume.website,
        id: $page.data.resume.id,
        all_set: false,
    });

    async function submit_form() {
        personal_details.all_set = true;
        const resp = await submit_form_PI(personal_details);
        // console.log(resp);
        if (resp.susses) {
            alert = {
                type: 'saved',
                message: resp.message,
            };
        } else {
            alert = {
                type: 'not-saved',
                message: resp.message,
            };
        }
        show_toast = true;
        personal_details.all_set = false;
    }

    $effect(() => {
        if (show_toast) {
            setTimeout(async () => {
                show_toast = false;
            }, 5000);
        }
    });
</script>

{#if show_toast}
    <Toast message={alert.message} type={alert.type} />
{/if}
<section>
    <div class="mb-10">
        <h2 class="font-bold text-2xl capitalize">Personal info</h2>
        <p>Provide basic information about your self.</p>
    </div>
    <div>
        <form on:submit|preventDefault={submit_form}>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="flex flex-col gap-2">
                    <span class=" font-semibold capitalize">First Name</span>
                    <input
                        bind:value={personal_details.first_name}
                        placeholder=" weak"
                        class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                        name="first_name"
                        type="text"
                    />
                </div>

                <div class="flex flex-col gap-2">
                    <span class=" font-semibold capitalize">Second name</span>
                    <input
                        bind:value={personal_details.second_name}
                        placeholder="John "
                        class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                        name="second_name"
                        type="text"
                    />
                </div>

                <div class="flex flex-col gap-2">
                    <span class=" font-semibold capitalize">Profession</span>
                    <input
                        bind:value={personal_details.profession}
                        placeholder="Dog keeper"
                        class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                        name="profession"
                        type="text"
                    />
                </div>
            </div>
            <h3 class="mt-10 mb-4 font-bold text-xl">Other infos</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="flex flex-col gap-2">
                    <span class=" font-semibold capitalize">email</span>
                    <input
                        bind:value={personal_details.email}
                        placeholder="me@email.com"
                        class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                        name="email"
                        type="email"
                    />
                </div>

                <div class="flex flex-col gap-2">
                    <span class=" font-semibold capitalize">website</span>
                    <input
                        bind:value={personal_details.website}
                        placeholder="www.portfolio.com "
                        class="w-full rounded-lg border p-4 focus:border-2 focus:border-gray-950 transition"
                        name="website"
                        type="url"
                    />
                </div>
            </div>

            <div class="flex gap-2">
                <button class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] flex justify-center" type="submit"
                    >{#if personal_details.all_set}
                        <span
                            style="border-top-color:transparent"
                            class="w-8 h-8 border-4 border-gray-800 border-solid rounded-full animate-spin block"
                        ></span>{:else}
                        Save
                    {/if}
                </button>
                <a
                    href={`/edit/${$page.data.resume.id}/experience`}
                    class="shadow-mine my-6 py-2 px-6 w-full md:w-[20%] text-center"
                    >Next
                </a>
            </div>
        </form>
    </div>
</section>

<style>
</style>
