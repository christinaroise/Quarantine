import { writable } from 'svelte/store'

export const categories = writable([
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
    "All"
]);