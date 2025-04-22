import { writable } from 'svelte/store';

export const popupStore = writable({
    isOpen: false,
    type: null, // 'trailer' ou 'favorites'
    data: null
});

export function openTrailerPopup(movie) {
    popupStore.set({
        isOpen: true,
        type: 'trailer',
        data: movie
    });
}

export function openFavoritesPopup() {
    popupStore.set({
        isOpen: true,
        type: 'favorites',
        data: null
    });
}

export function closePopup() {
    popupStore.set({
        isOpen: false,
        type: null,
        data: null
    });
} 