<script>
    const { pro, assign_select_to_state } = $props();

    let selected = $state(false);
    let current = $state(false);
    function switch_selected() {
        assign_select_to_state('projects', pro.more_details, pro.id);
        current = !current;
    }
</script>

<a href="#pro" type="button" onclick={switch_selected} class="w-full">
    <div class="my-2 relative border p-4 rounded-md hover:border-purple-600 focus:border-purple-600">
        <div class="font-bold capitalize">
            <span>{pro.name}</span>
        </div>
        <p>
            {pro.more_details}
        </p>
        <button
            class={`${selected ? 'custom-text' : 'special-texts-black text-transparent'} font-bold absolute top-3 right-3 text-xl`}
            onclick={switch_selected}>AI</button
        >
    </div>
</a>
