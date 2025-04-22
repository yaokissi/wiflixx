<script>
    import { getPopularMovies, getImageUrl, getMovieTrailer } from '$lib/services/tmdb';
    import { openTrailerPopup } from '$lib/stores/popup';
    import { Play, Heart } from '@lucide/svelte';
    import { onMount } from 'svelte';
    import { favorites } from '$lib/stores/favorites';

    let movies = [];
    let loading = true;
    let error = null;
    let favoriteIds = new Set();

    favorites.subscribe(favs => {
        favoriteIds = new Set(favs.map(fav => fav.id));
    });

    onMount(async () => {
        try {
            movies = await getPopularMovies();
            movies = movies.slice(0, 5); // Limiter à 5 films
        } catch (e) {
            error = e.message;
            console.error('Erreur lors du chargement des films:', e);
        } finally {
            loading = false;
        }
    });

    async function handleWatchTrailer(movie) {
        const videoKey = await getMovieTrailer(movie.id);
        if (videoKey) {
            openTrailerPopup({ ...movie, video_key: videoKey });
        }
    }

    function toggleFavorite(movie, event) {
        event.stopPropagation(); // Empêcher la propagation du clic pour ne pas déclencher handleWatchTrailer
        if (favoriteIds.has(movie.id)) {
            favorites.removeFavorite(movie.id);
        } else {
            favorites.addFavorite(movie);
        }
    }
</script>

<section class="w-[23%] backdrop-blur-2xl rounded-xl border-white-500 h-[50vh] overflow-auto">
    <div class="flex justify-between items-center w-[90%] mx-auto pt-5">
        <h2 class="text-sm text-white">🔥 New Trailer</h2>
        <p class="text-sm text-white"><span class="text-gray-700 text-xs">Sort By :</span> Today ⏚</p>
    </div>

    {#if loading}
        <div class="flex items-center justify-center h-full">
            <p class="text-white">Chargement...</p>
        </div>
    {:else if error}
        <div class="flex items-center justify-center h-full">
            <p class="text-white">Erreur: {error}</p>
        </div>
    {:else}
        {#each movies as movie}
            <div 
                class="flex justify-between items-center w-[90%] rounded-xl mx-auto mt-5 h-[20vh] relative bg-cover bg-no-repeat bg-center cursor-pointer"
                style="background-image: url({getImageUrl(movie.backdrop_path, 'w500')});"
                on:click={() => handleWatchTrailer(movie)}
            >
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl"></div>
                <div class="absolute bottom-0 left-0 right-0 p-2 flex justify-between items-center">
                    <span class="text-sm text-white truncate">{movie.title}</span>
                    <button 
                        class="flex items-center justify-center gap-1 bg-white/10 text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
                        on:click={(e) => toggleFavorite(movie, e)}
                    >
                        <Heart size={16} class={favoriteIds.has(movie.id) ? 'text-red-500 fill-red-500' : ''} />
                    </button>
                </div>
            </div>
        {/each}
    {/if}
</section>