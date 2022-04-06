<script>
	export let id = null;
	export let isCentered = false;
</script>

<section {id} class="container" class:is-centered={isCentered}>
	{#if $$slots.title}
		<h2 class:mb-0={!$$slots.content} class:text-center={isCentered}><slot name="title" /></h2>
	{/if}

	<slot name="content" />
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		padding-bottom: 8rem;
		padding-top: 8rem;
		position: relative;

		&.is-centered {
			align-items: center;
		}

		h2 {
			margin-top: 0;
		}
	}
</style>
