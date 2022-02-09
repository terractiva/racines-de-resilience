<script>
	export let text;

	let isCopied = false;

	function copy() {
		navigator.clipboard.writeText(text);
		isCopied = true;
	}
</script>

{#if window.navigator?.clipboard?.writeText}
	{#if isCopied}
		<p class="mb-0"><strong>Copié !</strong></p>
	{:else}
		<button class="button" type="button" on:click={() => copy()}>Copier</button>
	{/if}
{/if}
