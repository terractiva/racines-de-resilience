<script>
	export let hasReducedWidth = false;
	export let id = null;
	export let isExternalLink = false;
	export let isFullColumn = false;
	export let link = null;
	export let linkStyle = '';

	$: linkProps = isExternalLink ? { rel: 'external', target: '_blank' } : {};
</script>

<li {id} class:has-reduced-width={hasReducedWidth} class:is-full-column={isFullColumn}>
	{#if $$slots.title}
		<h3><slot name="title" /></h3>
	{/if}
	{#if $$slots.text}
		<p><slot name="text" /></p>
	{/if}
	{#if $$slots.content}
		<div><slot name="content" /></div>
	{/if}
	{#if $$slots.link}
		<a {...linkProps} class="button {linkStyle}" href={link}><slot name="link" /></a>
	{/if}
</li>

<style lang="scss">
	li {
		align-items: center;
		display: flex;
		flex-direction: column;

		&.has-reduced-width {
			margin: 0 auto;

			@include utilities.media-lg {
				width: 75%;
			}
		}
		&.is-full-column {
			@include utilities.media-md-lg {
				grid-column: 1/3;
			}
		}

		h3 {
			margin-top: 0;
			text-align: center;
		}

		p,
		div {
			&:not(:last-child) {
				margin-bottom: 3rem;

				@include utilities.media-sm {
					margin-bottom: 2rem;
				}
			}
		}

		p {
			text-align: justify;
		}

		a {
			margin-top: auto;
		}
	}
</style>
