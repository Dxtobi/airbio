<script>
    const { edu, assign_select_to_state } = $props();

    let selected = $state(false);
    let current = $state(false);
    //  $inspect(resume?.expand?.experience);

    function switch_selected() {
        assign_select_to_state('education', edu.more_details, edu.id);
        current = !current;
    }
</script>

<a href="#edu" type="button" onclick={switch_selected} class="w-full">
    <div class={`my-2 relative border p-4 rounded-md hover:border-purple-600 focus:border-purple-600`}>
        <div class="font-bold capitalize">
            <span>{edu.school}</span> -
            <span>{edu.course}</span>
        </div>

        <p>
            {edu.more_details}
        </p>
        <button
            class={`${selected ? 'custom-text' : 'special-texts-black text-transparent'} font-bold absolute top-3 right-3 text-xl`}
            onclick={switch_selected}>AI</button
        >
    </div>
</a>
