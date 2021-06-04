<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
    return {
      props: {
        isEdit: page.query.get('edit') !== null
      }
    }
	}
</script>

<script>
	import Canvas from '$lib/Canvas.svelte';
  import { onMount } from "svelte";

  /** @type boolean */
  export let isEdit;

  /** @type number */
  let height;
  /** @type number */
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

<Canvas height={height} isEdit={isEdit} width={width} />
