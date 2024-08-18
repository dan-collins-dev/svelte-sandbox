"using strict"
import { writable } from "svelte/store"

export const count = writable(0)
export const nameArray = writable(["Dan", "Vivi", "Zidane"])

