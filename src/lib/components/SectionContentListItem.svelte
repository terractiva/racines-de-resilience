<script>
	export let hasReducedWidth = false;
	export let isExternalLink = false;
	export let link;
	export let linkStyle = '';

	$: linkProps = isExternalLink ? { rel: 'external', target: '_blank' } : {};
</script>

<li class:has-reduced-width={hasReducedWidth}>
	{#if $$slots.title}
		<h3><slot name="title" /></h3>
	{/if}
	<p><slot name="content" /></p>
	<a {...linkProps} class="button {linkStyle}" href={link}><slot name="link" /></a>
</li>

<style lang="scss">
	li {
		align-items: center;
		display: flex;
		flex-direction: column;

		&.has-reduced-width {
			margin: 0 auto;
			width: 75%;
		}

		h3 {
			margin-top: 0;
			text-align: center;
		}

		p {
			margin-bottom: 3rem;
			text-align: justify;

			@include utilities.media-sm {
				margin-bottom: 2rem;
			}
		}

		a {
			margin-top: auto;
		}
	}
</style>
