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
        }, Math.floor(Math.random() * 20) + 80); // Generates a random delay between 90 and 120ms
      }
    };
  
    onDestroy(() => {
      clearTimeout(timeout);
    });
  </script>
  
  <h1 class="text-center text-white font-logo white-nowrap">
    <a href="/" class="tracking-wider">ㅤ{displayText}ㅤ</a>
  </h1>
  
  <style>
    /* Add any necessary styles here */
  </style>