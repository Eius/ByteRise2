import type { User } from "@firebase/auth";

export interface CurrentUser {
    isLoading: boolean,
    currentUser: User | null
}