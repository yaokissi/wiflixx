import { writable } from 'svelte/store';

function createFavoritesStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        addFavorite: (movie) => update(favorites => {
            if (!favorites.find(f => f.id === movie.id)) {
                return [...favorites, movie];
            }
            return favorites;
        }),
        removeFavorite: (movieId) => update(favorites => 
            favorites.filter(f => f.id !== movieId)
        ),
        isFavorite: (movieId) => {
            let favorites = [];
            subscribe(f => favorites = f)();
            return favorites.some(f => f.id === movieId);
        },
        getFavorites: () => {
            let favorites = [];
            subscribe(f => favorites = f)();
            return favorites;
        }
    };
}

export const favorites = createFavoritesStore(); 