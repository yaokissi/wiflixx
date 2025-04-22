<script>
    import { watched } from '$lib/stores/watched';
    import { getImageUrl } from '$lib/services/tmdb';
    import { Play } from '@lucide/svelte';

    $: watchedMovies = $watched;
</script>

<section class="w-[23%] backdrop-blur-2xl rounded-xl border-white-500 h-[35vh] overflow-auto">
    <div class="flex justify-between items-center w-[90%] mx-auto pt-5">
        <h2 class="text-sm text-white">🎬 Last Watched</h2>
    </div>

    {#if watchedMovies.length === 0}
        <div class="flex items-center justify-center h-full">
            <p class="text-white">No movies watched recently</p>
        </div>
    {:else}
        {#each watchedMovies as movie}
            <div class="flex justify-between items-center w-[90%] rounded-xl mx-auto mt-5 h-[20vh] relative bg-cover bg-no-repeat bg-center"
                style="background-image: url({getImageUrl(movie.backdrop_path, 'w500')});">
                <div class="absolute bottom-0 text-sm text-white backdrop-blur-2xl mx-auto p-2 rounded-b-xl w-full">
                    {movie.title}
                </div>
            </div>
        {/each}
    {/if}
</section> 