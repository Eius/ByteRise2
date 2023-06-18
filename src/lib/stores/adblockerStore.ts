import { writable } from "svelte/store";


export let adblockerEnabled = writable<boolean>(false);