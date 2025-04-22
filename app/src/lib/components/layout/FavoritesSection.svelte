<script>
    import { favorites } from '$lib/stores/favorites';
    import { getImageUrl } from '$lib/services/tmdb';
    import { Heart } from '@lucide/svelte';

    $: favoriteMovies = $favorites;
</script>

<section class="w-[23%] backdrop-blur-2xl rounded-xl border-white-500 h-[50vh] overflow-auto">
    <div class="flex justify-between items-center w-[90%] mx-auto pt-5">
        <h2 class="text-sm text-white">❤️ Mes Favoris</h2>
    </div>

    {#if favoriteMovies.length === 0}
        <div class="flex items-center justify-center h-full">
            <p class="text-white">Aucun film en favoris</p>
        </div>
    {:else}
        {#each favoriteMovies as movie}
            <div class="flex justify-between items-center w-[90%] rounded-xl mx-auto mt-5 h-[20vh] relative bg-cover bg-no-repeat bg-center"
                style="background-image: url({getImageUrl(movie.backdrop_path, 'w500')});">
                <div class="absolute bottom-0 text-sm text-white backdrop-blur-2xl mx-auto p-2 rounded-b-xl w-full">
                    {movie.title}
                </div>
            </div>
        {/each}
    {/if}
</section> 