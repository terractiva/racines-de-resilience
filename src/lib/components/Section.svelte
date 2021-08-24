<script>
	export let id = null;
	export let isCentered = false;

	$: props = id ? { id } : {};
</script>

<section {...props} class="container" class:text-center={isCentered}>
	{#if $$slots.title}
		<h2><slot name="title" /></h2>
	{/if}

	<slot name="content" />
</section>

<style lang="scss">
	section {
		padding-bottom: 8rem;
		padding-top: 8rem;
		position: relative;

		h2 {
			margin-top: 0;
		}
	}
</style>
