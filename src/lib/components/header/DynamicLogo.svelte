<script lang="ts">
    import "@fontsource/vt323";
    import { onMount, onDestroy } from "svelte";
  
    let text: string = "BYTERISE";
    let displayText: string = "";
  
    let timeout: NodeJS.Timeout;
  
    onMount(() => {
      const letters: string[] = text.split("");
      let i: number = 0;
      typeLetter(i, letters);
    });
  
    const typeLetter = (i: number, letters: string[]) => {
      if (i < letters.length) {
        displayText += letters[i];
        timeout = setTimeout(() => {
          i++;
          typeLetter(i, letters);
        }, Math.floor(Math.random() * 20) + 80);
      }
    };
  
    onDestroy(() => {
      clearTimeout(timeout);
    });
</script>
 
<a href="/" class="tracking-wider text-secondary-focus text-center text-5xl font-logo white-nowrap transition-all duration-200">
  {displayText}‎
</a>
