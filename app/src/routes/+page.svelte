<script>
import MainContent from '$lib/components/layout/MainContent.svelte';
import Popup from '$lib/components/ui/Popup.svelte';
</script>

<MainContent />
<Popup />

<body>
</body>

<style>
    :global(body) {
        height: 100vh;
        width: 100%;
        backdrop-filter: blur(5px);
        background-image: url("../assets/images/Apple-visionOS-2-hand-gestures.jpg.large_2x.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>