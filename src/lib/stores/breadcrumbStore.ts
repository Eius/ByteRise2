import type { BreadcrumbItem } from "$lib/interfaces/Breadcrumb";
import { writable } from "svelte/store";

export let breadcrumbStore = writable<BreadcrumbItem>({name: "Home", href: "/"});