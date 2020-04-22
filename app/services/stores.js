import { writable } from 'svelte/store'

export const filterComponent = writable(false)

export const api_key = 'e840db49fb1f48c99a39a73ddf05c0a4' 
// 'dc4286d2d7a04d47bb2ca997c66ecc73'  
// 'f015a847676d491f9b581d535c9361ac' 

export let articles = writable("")

let coronaRegExp = /\s*(\w*((C|c|K|k)ovid)|((C|c|K|k)orona)|((Q|q)uarantine)|((K|k)arantene)|((P|p)andemi)|((E|e)pidemi)|((V|v)irus)\w*)\s*/
    

