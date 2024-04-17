<script>
    import { navigating } from '$app/stores';
    console.log(!!$navigating);
</script>

{#if !!$navigating}
    <div class="progress-6 fixed top-0 left-0 z-[100]"></div>
{/if}

<style>
    .progress-6 {
        height: 4px;
        width: 100%;
        background: linear-gradient(#8e11e8 0 0), linear-gradient(#6b00ee 0 0), #e700d8;
        background-size: 60% 100%;
        background-repeat: no-repeat;
        animation: p6 3s infinite;
    }

    @keyframes p6 {
        0% {
            background-position:
                -150% 0,
                -150% 0;
        }
        66% {
            background-position:
                250% 0,
                -150% 0;
        }
        100% {
            background-position:
                250% 0,
                250% 0;
        }
    }
</style>
