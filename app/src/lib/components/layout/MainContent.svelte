<script>
    import NavBar from "$lib/components/layout/NavBar.svelte";
    import NewTrailerSection from "$lib/components/layout/NewTrailerSection.svelte";
    import NowTrending from "$lib/components/layout/NowTrending.svelte";
    import { Bell, UserRound, ChevronDown, Search } from '@lucide/svelte';
</script>

<main class="min-h-screen w-full">
    <section class="w-[90%]
                    mx-auto
                    min-h-screen
                    bg-white/20
                    rounded-2xl
                    shadow-lg
                    backdrop-blur-md
                    border
                    border-white/30">
        <NavBar />
        <section class="w-[90%] mx-auto">
            <NewTrailerSection></NewTrailerSection>
            <NowTrending></NowTrending>
        </section>

    </section>
</main>