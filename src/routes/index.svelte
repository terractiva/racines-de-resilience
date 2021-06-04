<script>
	import Canvas from '$lib/Canvas.svelte';
  import { onMount } from "svelte";

  let height;
  let width;

  onMount(() => {
		setSize();
  });

	function setSize() {
    const main = document.getElementsByTagName('main')[0];

    height = main.clientHeight;
    width = main.clientWidth;
	};
</script>

<svelte:window on:resize={setSize}></svelte:window>

<Canvas height={height} width={width} />
