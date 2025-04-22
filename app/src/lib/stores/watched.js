import { writable } from 'svelte/store';

function createWatchedStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        addWatched: (movie) => update(watched => {
            if (!watched.find(w => w.id === movie.id)) {
                return [...watched, movie];
            }
            return watched;
        }),
        removeWatched: (movieId) => update(watched => 
            watched.filter(w => w.id !== movieId)
        ),
        isWatched: (movieId) => {
            let watched = [];
            subscribe(w => watched = w)();
            return watched.some(w => w.id === movieId);
        },
        getWatched: () => {
            let watched = [];
            subscribe(w => watched = w)();
            return watched;
        }
    };
}

export const watched = createWatchedStore(); 