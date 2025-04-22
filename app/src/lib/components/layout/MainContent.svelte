<script>
    import NavBar from "$lib/components/layout/NavBar.svelte";
    import NewTrailerSection from "$lib/components/layout/NewTrailerSection.svelte";
    import NowTrending from "$lib/components/layout/NowTrending.svelte";
    import LastWatched from "$lib/components/layout/LastWatched.svelte";
    import MightLike from "$lib/components/layout/MightLike.svelte";
    import MobileWarning from "$lib/components/layout/MobileWarning.svelte";
</script>

<MobileWarning />
<main class="min-h-screenl hidden lg:block">
    <section class="w-[95%]
                    mx-auto
                    min-h-screen
                    bg-white/20
                    rounded-2xl
                    shadow-lg
                    backdrop-blur-md
                    border
                    border-white/30">
        <NavBar />
        <section class="flex justify-around w-[90%] mx-auto">
            <NewTrailerSection />
            <NowTrending />
        </section>
        <section class="flex justify-around w-[90%] mx-auto mt-5">
            <LastWatched />
            <MightLike />
        </section>
    </section>
</main>