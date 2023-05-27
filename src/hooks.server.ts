import type {Handle} from "@sveltejs/kit";
import {getAuth} from "firebase/auth";

export const handle = (async ({ event, resolve }) => {
    if (event.url.pathname.startsWith('/admin')) {
        const user = getAuth().currentUser;
        if (user) {
            return new Response('🍌');
        } else {
            return new Response('Unauthorized');
        }
    }

    const response = await resolve(event);
    return response;
}) satisfies Handle;