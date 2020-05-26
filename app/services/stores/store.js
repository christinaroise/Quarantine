import { writable } from 'svelte/store'

export const filterComponent = writable(false)
export const dashboardFilterIsActive = writable(false)
export const libraryFilterIsActive = writable(false)
export const articlesCollapse = writable(false)
export const thereAreNoSources = writable(false)
export const api_key = 'e840db49fb1f48c99a39a73ddf05c0a4'
//'dc4286d2d7a04d47bb2ca997c66ecc73' 
// 'f015a847676d491f9b581d535c9361ac'
export const weather_api_key = '90bffc08d53ce7853e1b33ba0c3c2ba8'


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

export let articles = writable([])
export let todaysArticles = writable([])
export let sources = writable([])

export let libraryList = writable([])
export let filteredLibList = writable([])
export let savedSources = writable([])
export let bookmarkList = writable([])

export let covid19Filter = writable(false)
export let covid19Value = writable(false)

export let trumpFilter = writable(false)
export let trumpValue = writable(false)

export let newestValue = writable(true)
export let popularValue = writable(false)

export let countryCode = writable("us")
export let countryName = writable("United States")
export let country = writable("")

export let filterCountryCode = writable("")
export let filterCountryName = writable("")
export let filterCategory = writable("")
export let filterCategoryValue = writable("")

export let coronaRegExp = /\s*(\w*((C|c|K|k)ovid)|((C|c|K|k)orona)|((Q|q)uarantine)|((K|k)arantene)|((P|p)andemi)|((E|e)pidemi)|((V|v)irus)\w*)\s*/
export let trumpRegExp = /\s*(\w*((T|t|)rump)|((D|d)onald)|(POTUS)\w*)\s*/
    

