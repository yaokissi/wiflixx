<script>
    import { watched } from '$lib/stores/watched';
    import { getImageUrl } from '$lib/services/tmdb';
    import { Play } from '@lucide/svelte';

    $: watchedMovies = $watched;
</script>

<section class="w-full lg:w-[23%] backdrop-blur-2xl rounded-xl border-white-500 min-h-[35vh] overflow-auto">
    <div class="flex justify-between items-center w-[90%] mx-auto pt-4 md:pt-5">
        <h2 class="text-sm md:text-base text-white">🎬 Last Watched</h2>
    </div>

    {#if watchedMovies.length === 0}
        <div class="flex items-center justify-center h-full min-h-[20vh]">
            <p class="text-white text-sm text-center px-4">No movies watched recently</p>
        </div>
    {:else}
        <div class="space-y-3 md:space-y-4 pb-4">
            {#each watchedMovies as movie}
                <div 
                    class="flex justify-between items-center w-[90%] rounded-xl mx-auto mt-3 md:mt-5 h-[15vh] md:h-[18vh] lg:h-[20vh] relative bg-cover bg-no-repeat bg-center hover:scale-[1.02] transition-transform cursor-pointer"
                    style="background-image: url({getImageUrl(movie.backdrop_path, 'w500')});"
                    role="button"
                    tabindex="0"
                >
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-xl"></div>
                    <div class="absolute bottom-0 text-xs md:text-sm text-white backdrop-blur-sm p-2 md:p-3 rounded-b-xl w-full z-10">
                        <span class="font-medium line-clamp-2">{movie.title}</span>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</section>