<script>
	import Canvas from '$lib/Canvas.svelte';
  import { onDestroy, onMount } from "svelte";
  import { writable } from "svelte/store";

  const height = writable(null);
  const width = writable(null);

	const setSize = () => {
    const main = document.getElementsByTagName('main')[0];

    height.set(main.clientHeight);
    width.set(main.clientWidth);
	};

  onMount(() => {
		setSize();
		window.addEventListener('resize', setSize);
  });

  onDestroy(() => {
    window.removeEventListener('resize', setSize);
  });
</script>

<style>
	:global(main) {
		position: relative;
	}
</style>

<Canvas height={$height} width={$width} />
