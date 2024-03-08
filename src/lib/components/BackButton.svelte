<script>
    import { goto } from '$app/navigation';

    function goback() {
        history.back();
    }
</script>

<button
    onclick={goback}
    class="w-fit py-2 px-6 border-2 border-black rounded grid place-content-center font-bold shadow-mine-grad"
    >&larr; Back</button
>
