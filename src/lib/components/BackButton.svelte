<script>
    import { goto } from '$app/navigation';

    function goback() {
        history.back();
    }
</script>

<button onclick={goback} class="w-fit py-1 px-6 border grid place-content-center font-bold rounded-full"
    >&larr; Back</button
>
