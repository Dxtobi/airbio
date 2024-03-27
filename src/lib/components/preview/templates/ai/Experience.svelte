<script>
    import { extractYearMonth } from '../../../../utils/helpers.utils';

    const { exp, assign_select_to_state } = $props();

    let selected = $state(false);
    let current = $state(false);

    function switch_selected() {
        assign_select_to_state('experience', exp.more_details, exp.id);
        current = !current;
    }
    //  $inspect(resume?.expand?.experience);
</script>

<a href="#exp" type="button" onclick={switch_selected} class="w-full">
    <div class="my-2 relative border p-4 rounded-md hover:border-purple-600 focus:border-purple-600">
        <div class="flex flex-col">
            <h2 class="  capitalize">{exp.job_title}</h2>
            <i> {extractYearMonth(exp.ended)}</i>
        </div>
        <p>
            {exp.more_details}
        </p>
        <button
            class={`${selected ? 'custom-text' : 'special-texts-black text-transparent'} font-bold absolute top-3 right-3 text-xl`}
            onclick={switch_selected}>AI</button
        >
    </div>
</a>
