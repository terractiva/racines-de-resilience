<script>
	export let hasReducedWidth = false;
	export let id = null;
	export let isExternalLink = false;
	export let isLinkDisabled = false;
	export let link = null;
	export let linkStyle = '';

	$: linkProps = isExternalLink ? { rel: 'external', target: '_blank' } : {};
</script>

<li {id} class:has-reduced-width={hasReducedWidth}>
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
		{#if isLinkDisabled}
			<button disabled class="button {linkStyle}" type="button"><slot name="link" /> (à venir)</button
			>
		{:else}
			<a {...linkProps} class="button {linkStyle}" href={link}><slot name="link" /></a>
		{/if}
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

		a,
		button {
			margin-top: auto;
		}
	}
</style>
