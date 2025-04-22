<script>
    import { onMount } from 'svelte';
    let isMobile = false;
    let isTablet = false;

    onMount(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            isMobile = width < 768;
            isTablet = width >= 768 && width < 1280;
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    });
</script>

{#if isMobile || isTablet}
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="bg-black/50 backdrop-blur-xl rounded-2xl p-8 max-w-md text-center border border-white/20">
            <h1 class="text-2xl font-bold text-white mb-4">⚠️ Version non disponible</h1>
            <p class="text-white/80 mb-6">
                {#if isMobile}
                    Cette application n'est pas disponible sur mobile.
                {:else}
                    Cette application n'est pas disponible sur tablette.
                {/if}
                <br><br>
                Elle est optimisée pour une utilisation sur ordinateur de bureau.
            </p>
            <p class="text-white/60 text-sm">
                Pour une meilleure expérience, veuillez consulter l'application sur un ordinateur.
            </p>
        </div>
    </div>
{/if}

<style>
    :global(body) {
        overflow: hidden;
    }
</style> 