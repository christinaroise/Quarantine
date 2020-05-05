import { writable } from 'svelte/store'

export const filterComponent = writable(false)
export const dashboardFilterIsActive = writable(false)
export const libraryFilterIsActive = writable(false)
export const inModal = writable(true)

export const api_key = 'e840db49fb1f48c99a39a73ddf05c0a4' 
// 'f015a847676d491f9b581d535c9361ac'
//'dc4286d2d7a04d47bb2ca997c66ecc73' 


export const categories = writable([
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology"
]);

export let articles = writable([])
export let sources = writable([])

export let newspaperList = writable([])
export let filteredLibList = writable([])
export let sourceList = writable([])
export let bookmarkList = writable([])

export let saveOrRemoveText = writable("")

let coronaRegExp = /\s*(\w*((C|c|K|k)ovid)|((C|c|K|k)orona)|((Q|q)uarantine)|((K|k)arantene)|((P|p)andemi)|((E|e)pidemi)|((V|v)irus)\w*)\s*/
    

