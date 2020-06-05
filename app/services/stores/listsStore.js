import { writable } from 'svelte/store'

export let articles = writable([])
export let todaysArticles = writable([])
export let sources = writable([])

export let libraryList = writable([])
export let filteredLibraryList = writable([])
export let savedSources = writable([])
export let bookmarkList = writable([])
