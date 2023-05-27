<script lang="ts">
    import Steps from "$lib/svg/Steps.svelte";
    import DynamicLogo from "./partials/DynamicLogo.svelte";

</script>

<div class="bg-primary">
    <div class="hidden md:block text-6xl md:text-8xl lg:text-9xl py-12 md:py-16 lg:py-20">
        <DynamicLogo />
    </div>
</div>
<Steps />
