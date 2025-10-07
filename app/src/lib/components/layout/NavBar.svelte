<script>
    import '../../../app.css';
    import { Heart, UserRound, ChevronDown, Search } from '@lucide/svelte';
    import { animate, createSpring } from 'animejs';
    import {onMount} from "svelte";
    import { favorites } from '$lib/stores/favorites';
    import { openFavoritesPopup } from '$lib/stores/popup';
    import { searchStore } from '$lib/stores/search';
    import { searchMovies } from '$lib/services/tmdb';
    import { openTrailerPopup } from '$lib/stores/popup';

    let favoriteCount = 0;
    let searchQuery = '';
    let searchTimeout;
    let searchContainer;
    let favoriteIds = new Set();

    favorites.subscribe(favs => {
        favoriteCount = favs.length;
        favoriteIds = new Set(favs.map(fav => fav.id));
    });

    onMount(() => {
        animate('.favorite-heart', {
            scale: [
                { to: 1.25, ease: 'inOut(3)', duration: 200 },
                { to: 1, ease: createSpring({ stiffness: 300 }) }
            ],
            loop: true,
            loopDelay: 250,
        });

        // Ajouter l'écouteur d'événements pour fermer les résultats en cliquant ailleurs
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    function handleClickOutside(event) {
        if (searchContainer && !searchContainer.contains(event.target)) {
            searchStore.update(state => ({
                ...state,
                results: []
            }));
        }
    }

    function handleFavoritesClick() {
        openFavoritesPopup();
    }

    async function handleSearch(event) {
        const query = event.target.value;
        searchQuery = query;
        
        // Mettre à jour le store de recherche
        searchStore.update(state => ({
            ...state,
            query,
            isLoading: true,
            error: null
        }));

        // Annuler la recherche précédente si elle existe
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        // Attendre 500ms avant de lancer la recherche pour éviter trop d'appels API
        searchTimeout = setTimeout(async () => {
            try {
                if (query.trim() === '') {
                    searchStore.update(state => ({
                        ...state,
                        results: [],
                        isLoading: false
                    }));
                    return;
                }

                const results = await searchMovies(query);
                searchStore.update(state => ({
                    ...state,
                    results,
                    isLoading: false
                }));
            } catch (error) {
                searchStore.update(state => ({
                    ...state,
                    error: error.message,
                    isLoading: false
                }));
            }
        }, 500);
    }

    function handleSearchResultClick(movie) {
        openTrailerPopup(movie);
        // Fermer les résultats après la sélection
        searchStore.update(state => ({
            ...state,
            results: []
        }));
    }

    function toggleFavorite(movie) {
        if (favoriteIds.has(movie.id)) {
            favorites.removeFavorite(movie.id);
        } else {
            favorites.addFavorite(movie);
        }
    }
</script>

<!-- Desktop navbar (visible à partir de lg) -->
<nav class="hidden lg:flex justify-evenly items-center w-full h-20 rounded-full relative z-50">
    <div class="flex
                items-center
                w-[20%]
                backdrop-blur-2xl
                rounded-full
                relative
                "
                bind:this={searchContainer}
    >
        <Search class="text-white ml-5"/>
        <input type="text"
               placeholder="Search movies"
               class="
               ml-5
               h-10
               text-white-500
               bg-transparent
               border-none
               focus:outline-none"
               value={searchQuery}
               on:input={handleSearch}
        />
        {#if $searchStore.isLoading}
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            </div>
        {/if}
        {#if $searchStore.results.length > 0 && searchQuery.trim() !== ''}
            <div class="fixed top-24 left-0 w-[100%] bg-white rounded-lg shadow-lg overflow-hidden z-[9999] border border-white/30">
                {#each $searchStore.results.slice(0, 5) as movie}
                    <div class="p-3 hover:bg-white/10 cursor-pointer flex items-center gap-3"
                         on:click={() => handleSearchResultClick(movie)}>
                        <img src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} 
                             alt={movie.title}
                             class="w-10 h-15 object-cover rounded"
                        />
                        <div class="flex-grow">
                            <p class="text-black text-sm">{movie.title}</p>
                            <p class="text-gray-400 text-xs">{movie.release_date?.split('-')[0]}</p>
                        </div>
                        <button 
                            class="flex items-center justify-center gap-1 bg-white/10 text-black p-2 rounded-lg hover:bg-white/20 transition-colors"
                            on:click|stopPropagation={() => toggleFavorite(movie)}
                        >
                            <Heart size={16} class={favoriteIds.has(movie.id) ? 'text-red-500' : ''} />
                        </button>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
    <ul class="hidden lg:flex justify-evenly rounded-full">
        <li>Movie</li>
        <li>TV Series</li>
        <li>Animations</li>
        <li>Mistery</li>
    </ul>
    <div class="relative">
        <button
            class="
            favorite-heart
            backdrop-blur-2xl
            p-3
            z-999
            text-white
            text-lg
            rounded-full
            bg-white/10
            inline-flex
            items-center
            justify-center
            h-10
            w-10
            cursor-pointer
            hover:bg-white/20
            transition-colors
            duration-200
        "
            on:click={handleFavoritesClick}
        >
            <Heart size="24" color="white" />
        </button>
        {#if favoriteCount > 0}
            <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {favoriteCount}
            </span>
        {/if}
    </div>
    <div class="flex
                justify-around
                items-center
                border-white-500
                backdrop-blur-2xl
                rounded-full
                w-[15%]
    ">
        <div class="flex justify-between items-center ">
            <a href="https://yaodev.me" target="_blank" rel="noopener noreferrer">
                <img src="https://i.ibb.co/hJtmmsh0/avatar1.png" alt="user avatar" class="rounded-full w-10 h-10"/>
            </a>
            <div>
                <p class="text-xs text-white">YAO KISSI</p>
                <a href="https://yaodev.me" target="_blank" rel="noopener noreferrer"><p class="text-xs text-cyan-300 underline">Visit my website</p></a>
            </div>
        </div>
        <div>
            <ChevronDown size="24" color="white" />
        </div>
    </div>
</nav>

<!-- Mobile/tablette bottom navbar (visible sous lg) -->
<nav class="lg:hidden fixed bottom-0 inset-x-0 h-16 z-[1000]">
    <div class="mx-auto w-full h-full flex items-center justify-between px-3 bg-white/10 backdrop-blur-2xl border-t border-white/20">
        <div class="flex items-center gap-2 flex-1" bind:this={searchContainer}>
            <Search class="text-white" size={18} />
            <input
                type="text"
                placeholder="Search movies"
                class="h-8 w-full text-white bg-transparent border-none focus:outline-none placeholder-white/70 text-sm"
                value={searchQuery}
                on:input={handleSearch}
            />
        </div>
        <div class="relative ml-2">
            <button
                class="favorite-heart bg-white/10 p-2 rounded-full text-white h-9 w-9 inline-flex items-center justify-center hover:bg-white/20"
                on:click={handleFavoritesClick}
            >
                <Heart size="18" />
            </button>
            {#if favoriteCount > 0}
                <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favoriteCount}
                </span>
            {/if}
        </div>
        <a href="https://yaodev.me" target="_blank" rel="noopener noreferrer" class="ml-2">
            <img src="https://i.ibb.co/hJtmmsh0/avatar1.png" alt="user avatar" class="rounded-full w-9 h-9"/>
        </a>
    </div>

    {#if $searchStore.isLoading}
        <div class="absolute -top-6 right-5">
            <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        </div>
    {/if}

    {#if $searchStore.results.length > 0 && searchQuery.trim() !== ''}
        <div class="absolute bottom-16 left-0 right-0 mx-2 bg-white rounded-lg shadow-lg overflow-hidden z-[1100] border border-white/30">
            {#each $searchStore.results.slice(0, 6) as movie}
                <div class="p-3 hover:bg-white/10 cursor-pointer flex items-center gap-3"
                     on:click={() => handleSearchResultClick(movie)}>
                    <img src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} 
                         alt={movie.title}
                         class="w-10 h-15 object-cover rounded"
                    />
                    <div class="flex-grow">
                        <p class="text-black text-sm">{movie.title}</p>
                        <p class="text-gray-400 text-xs">{movie.release_date?.split('-')[0]}</p>
                    </div>
                    <button 
                        class="flex items-center justify-center gap-1 bg-white/10 text-black p-2 rounded-lg hover:bg-white/20 transition-colors"
                        on:click|stopPropagation={() => toggleFavorite(movie)}
                    >
                        <Heart size={16} class={favoriteIds.has(movie.id) ? 'text-red-500' : ''} />
                    </button>
                </div>
            {/each}
        </div>
    {/if}
</nav>

<style>
    ul li {
        padding: 10px;
        margin: 0 10px;
        list-style: none;
        color:white;
        font-weight: bold;
        cursor: pointer;
    }
    input {
        color: white;
    }
    input::placeholder {
        color: white;
    }
</style>
