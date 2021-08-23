<script>
	export let isCentered = false;
</script>

<section class="container" class:text-center={isCentered}>
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
