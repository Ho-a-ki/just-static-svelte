
import { writable } from 'svelte/store' 

export const headerVisible = writable(true)
export const text = writable('hello')
export const mobileMenuVisible = writable(false)