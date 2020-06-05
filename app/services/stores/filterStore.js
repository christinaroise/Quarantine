import { writable } from 'svelte/store'

export const isFilterComponentActivated = writable(false)
export const isDashboardFilterActivated = writable(false)
export const isLibraryFilterActivated = writable(false)
export const filteredSearchReturnsNoSources = writable(false)

export let sortByValue = writable("publishedAt")
//export let enableCovid19Filter = writable(false)
//export let enableTrumpFilter = writable(false)

export let countryCode = writable("us")
export let countryName = writable("United States")
export let country = writable("")

//
export let chosenCountryCode = writable("")
export let chosenCountryName = writable("")
export let chosenCategory = writable("")
export let chosenCategoryValue = writable("")