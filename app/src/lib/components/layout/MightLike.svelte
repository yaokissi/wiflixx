<script>
    import { getPopularMovies, getImageUrl, getMovieTrailer, getSimilarMovies } from '$lib/services/tmdb';
    import { favorites } from '$lib/stores/favorites';
    import { openTrailerPopup } from '$lib/stores/popup';
    import { Play, Heart } from '@lucide/svelte';
    import { onMount } from 'svelte';

    let movies = [];
    let loading = true;
    let error = null;
    let favoriteIds = new Set();

    favorites.subscribe(favs => {
        favoriteIds = new Set(favs.map(fav => fav.id));
    });

    onMount(async () => {
        try {
            const popularMovies = await getPopularMovies();
            if (popularMovies.length > 0) {
                const currentMovie = popularMovies[0];
                movies = await getSimilarMovies(currentMovie.id);
                movies = movies.slice(0, 4); // Limiter à 4 films
            }
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

    function toggleFavorite(movie) {
        if (favoriteIds.has(movie.id)) {
            favorites.removeFavorite(movie.id);
        } else {
            favorites.addFavorite(movie);
        }
    }
</script>

<section class="w-[70%] backdrop-blur-3xl rounded-xl border-white-500 h-[35vh]  overflow-auto">
    <div class="flex justify-between items-center w-[90%] mx-auto pt-5">
        <h2 class="text-lg text-white font-bold">💫 You Might Like</h2>
        <p class="text-sm text-white"><span class="text-gray-700 text-xs">Sort By :</span> Similar ⏚</p>
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
        <div class="grid grid-cols-4 gap-4 w-[90%] mx-auto mt-5">
            {#each movies as movie}
                <div class="bg-white/5 rounded-lg overflow-hidden">
                    <div class="relative">
                        <img 
                            src={getImageUrl(movie.poster_path, 'w500')} 
                            alt={movie.title}
                            class="w-full h-40 object-cover"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-2">
                            <h3 class="text-white text-sm font-medium truncate">{movie.title}</h3>
                            <p class="text-gray-300 text-xs">{movie.release_date?.split('-')[0]}</p>
                        </div>
                    </div>
                    <div class="flex justify-between p-2">
                        <button 
                            class="flex items-center justify-center gap-1 bg-white/10 text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
                            on:click={() => handleWatchTrailer(movie)}
                        >
                            <Play size={16} />
                        </button>
                        <button 
                            class="flex items-center justify-center gap-1 bg-white/10 text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
                            on:click={() => toggleFavorite(movie)}
                        >
                            <Heart size={16} class={favoriteIds.has(movie.id) ? 'text-red-500' : ''} />
                        </button>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</section>


