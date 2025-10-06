<script>
  import { onMount } from "svelte";
    import NavBar from "$lib/components/layout/NavBar.svelte";
    import NewTrailerSection from "$lib/components/layout/NewTrailerSection.svelte";
    import NowTrending from "$lib/components/layout/NowTrending.svelte";
    import LastWatched from "$lib/components/layout/LastWatched.svelte";
    import MightLike from "$lib/components/layout/MightLike.svelte";
    import MobileWarning from "$lib/components/layout/MobileWarning.svelte";

    let isMobile = false;

onMount(() => {
  const check = () => (isMobile = window.innerWidth < 768);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
});
    
</script>


<main class="h-full overflow-y-scroll pb-20">
  <section class="w-[95%] mx-auto min-h-screen bg-white/20 rounded-2xl shadow-lg backdrop-blur-md border border-white/30">
  {#if !isMobile}
    <NavBar class="hidden md:block fixed top-0 w-full" />
  {/if}
      <!-- Section 1 -->
      <section class="flex flex-col md:flex-row justify-around w-[90%] mx-auto gap-5">
        <NowTrending class="w-full md:w-[70%]" />
        <NewTrailerSection class="w-full md:w-[30%]" />
      </section>
  
      <!-- Section 2 -->
      <section class="flex flex-col md:flex-row justify-around w-[90%] mx-auto mt-5 gap-5">
        <LastWatched class="w-full md:w-[70%]" />
        <MightLike class="w-full md:w-[30%]" />
      </section>
    </section>
    {#if isMobile}
    <NavBar class="block md:hidden fixed bottom-0 left-0 " />
    {/if}

  </main>
  