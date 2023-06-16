<script lang="ts">
	import { authHandlers, authStore } from "$lib/stores/authStore";

    let email = "";
    let password = "";

    async function handleSubmit() {
        if (!email || !password) {
            return;
        } else {
            try {
                await authHandlers.login(email, password);
            } catch (err) {
                console.log(err);
            }
        }
        if ($authStore.currentUser) {
            window.location.href = "/private/dashboard"
        }
    }
</script>

<div class="container py-16 flex flex-col items-center justify-center gap-3">
    <h2 class="text-4xl font-bold uppercase">Login</h2>
    <form class="flex flex-col items-center gap-1">
        <input bind:value={email} type="text" placeholder="Email" class="border p-1">
        <input bind:value={password} type="password" placeholder="Password" class="border p-1">
    </form>
    <button class="border py-1 px-6 font-meium" on:click={handleSubmit}>
        Login
    </button>
</div>