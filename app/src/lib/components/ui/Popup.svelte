<script>
    import { popupStore, closePopup } from '$lib/stores/popup';
    import { favorites } from '$lib/stores/favorites';
    import { X, Play, Heart, Trash2 } from '@lucide/svelte';
    import { getImageUrl, getMovieTrailer } from '$lib/services/tmdb';
    import { openTrailerPopup } from '$lib/stores/popup';
    import { watched } from '$lib/stores/watched';

    function handleClose() {
        closePopup();
    }

    async function handleWatchTrailer(movie) {
        const videoKey = await getMovieTrailer(movie.id);
        if (videoKey) {
            openTrailerPopup({ ...movie, video_key: videoKey });
            watched.addWatched(movie);
        }
    }

    function handleRemoveFavorite(movieId) {
        favorites.removeFavorite(movieId);
    }
</script>

{#if $popupStore.isOpen}
    <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
        <div class="bg-white/20 backdrop-blur-2xl p-6 rounded-2xl w-[80%] max-w-4xl max-h-[90vh] overflow-y-auto relative border border-white/30">
            <button 
                class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                on:click={handleClose}
            >
                <X size={24} />
            </button>

            {#if $popupStore.type === 'trailer' && $popupStore.data}
                <div class="text-white">
                    <h2 class="text-2xl font-bold mb-4">{$popupStore.data.title}</h2>
                    <div class="aspect-video w-full bg-black rounded-lg mb-4">
                        <iframe
                            src="https://www.youtube.com/embed/{$popupStore.data.video_key}"
                            title="{$popupStore.data.title} - Bande annonce"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            class="w-full h-full rounded-lg"
                        ></iframe>
                    </div>
                    <p class="text-gray-300">{$popupStore.data.overview}</p>
                </div>
            {:else if $popupStore.type === 'favorites'}
                <div class="text-white">
                    <h2 class="text-2xl font-bold mb-4">Mes Favoris ({$favorites.length})</h2>
                    {#if $favorites.length === 0}
                        <div class="flex flex-col items-center justify-center py-12">
                            <Heart class="w-16 h-16 text-gray-400 mb-4" />
                            <p class="text-gray-400 text-lg">Vous n'avez pas encore de films favoris</p>
                        </div>
                    {:else}
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {#each $favorites as movie}
                                <div class="bg-white/5 rounded-lg p-4 flex flex-col gap-4 group">
                                    <div class="flex gap-4">
                                        <img 
                                            src={getImageUrl(movie.poster_path, 'w200')} 
                                            alt={movie.title}
                                            class="w-24 h-36 object-cover rounded"
                                        />
                                        <div class="flex-1">
                                            <h3 class="font-bold text-lg">{movie.title}</h3>
                                            <p class="text-sm text-gray-300">{movie.release_date}</p>
                                            <p class="text-sm text-gray-400 mt-2 line-clamp-2">{movie.overview}</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-2">
                                        <button 
                                            class="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
                                            on:click={() => handleWatchTrailer(movie)}
                                        >
                                            <Play size={16} /> Bande annonce
                                        </button>
                                        <button 
                                            class="flex items-center justify-center gap-2 bg-red-500/20 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors"
                                            on:click={() => handleRemoveFavorite(movie.id)}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    {/if}
                </div>
            {/if}
        </div>
    </div>
{/if} 