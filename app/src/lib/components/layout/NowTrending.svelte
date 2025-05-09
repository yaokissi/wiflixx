<script>
import {Ellipsis, Download, Play, Heart } from "@lucide/svelte";
import { getPopularMovies, getImageUrl, getMovieTrailer } from '$lib/services/tmdb';
import { favorites } from '$lib/stores/favorites';
import { openTrailerPopup } from '$lib/stores/popup';
import { onMount } from 'svelte';

let movies = [];
let currentMovie = null;
let loading = true;
let error = null;
let favoriteIds = new Set();

favorites.subscribe(favs => {
    favoriteIds = new Set(favs.map(fav => fav.id));
});

onMount(async () => {
    try {
        movies = await getPopularMovies();
        if (movies.length > 0) {
            currentMovie = movies[0];
            document.documentElement.style.setProperty('--movie-bg', `url(${getImageUrl(currentMovie.backdrop_path, 'original')})`);
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

$: if (currentMovie) {
    document.documentElement.style.setProperty('--movie-bg', `url(${getImageUrl(currentMovie.backdrop_path, 'original')})`);
}
</script>

<section
    class="w-[70%]
            rounded-xl
            border-white-500
            h-[50vh]
            overflow-auto
            relative"
    style="background-image: var(--movie-bg); background-size: cover; background-position: center; opacity: 0.90;"
>
    <div class="absolute inset-0 bg-black/50"></div>
    
    <article class="pl-5 relative z-10">
        <p class="text-xs mt-5 z-10 text-white text-center backdrop-blur-2xl w-[15%] p-2 rounded-full">
            🔥 Now Trending
        </p>

        {#if loading}
            <div class="flex items-center justify-center h-full">
                <p class="text-white">Chargement...</p>
            </div>
        {:else if error}
            <div class="flex items-center justify-center h-full">
                <p class="text-white">Erreur: {error}</p>
            </div>
        {:else if currentMovie}
            <div class="flex justify-between w-[20%] mt-32">
                <p class="text-xs p-2 z-10 text-white text-center backdrop-blur-2xl rounded-full">
                    {currentMovie.vote_average.toFixed(1)} ⭐
                </p>
                <p class="text-xs p-2 z-10 text-white text-center backdrop-blur-2xl rounded-full">
                    {new Date(currentMovie.release_date).getFullYear()}
                </p>
            </div>

            <div class="w-[40%] mt-5">
                <h1 class="text-white text-2xl font-bold">{currentMovie.title}</h1>
                <p class="text-gray-300 text-sm mt-2 line-clamp-3">
                    {currentMovie.overview}
                </p>
            </div>

            <div class="flex justify-between w-[60%] mt-4">
                <button 
                    class="flex justify-around bg-white p-3 w-[30%] rounded-full"
                    on:click={() => handleWatchTrailer(currentMovie)}
                >
                    <Play class="mr-2" /> Watch
                </button>
                <button class="flex justify-around border text-white p-3 w-[40%] rounded-full">
                    <Download class="mr-2" /> Download
                </button>
                <button 
                    class="w-[11%] border flex justify-center items-center rounded-full text-white"
                    on:click={() => toggleFavorite(currentMovie)}
                >
                    <Heart class={favoriteIds.has(currentMovie.id) ? 'text-red-500 fill-red-500' : ''} />
                </button>
            </div>
        {/if}
    </article>
</section>

<style>
    :global(:root) {
        --movie-bg: url('');
    }
</style>

