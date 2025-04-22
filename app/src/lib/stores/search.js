import { writable } from 'svelte/store';

export const searchStore = writable({
    query: '',
    results: [],
    isLoading: false,
    error: null
}); 