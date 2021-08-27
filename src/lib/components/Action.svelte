<script>
	export let action;
	export let hasShadow = false;

	$: borderClasses = action.categories.map((category) => `bd-${category}`).join(' ');
	$: textClasses = action.categories.map((category) => `text-${category}`).join(' ');
</script>

<article class={borderClasses} class:has-shadow={hasShadow}>
	<header>
		<p class="action-level">
			{#each { length: action.level } as _}∎{/each}
		</p>

		<p class="action-text">{@html action.text}</p>
	</header>

	<p class="action-sources {textClasses}">
		<b>
			{#each action.sources as source, index}
				{#if source.link}<a href={source.link} rel="external" target="_blank">{source.name}</a
					>{:else}{source.name}{/if}{#if index !== action.sources.length - 1}<span>, </span>{/if}
			{/each}
		</b>
	</p>

	<p class="action-subcategory">
		<span class="tag is-small"><b>{action.subcategory.name}</b></span>
	</p>
</article>

<style lang="scss">
	article {
		background: var(--bg-color);
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
		padding: 1rem 2rem;

		&.has-shadow {
			box-shadow: utilities.$shadow;
		}

		p {
			margin-bottom: 0;
		}

		.action-level {
			float: right;
			margin-left: 0.4rem;
			user-select: none;
		}

		.action-sources {
			margin: 0.5rem 0;

			a {
				color: inherit;
			}
		}

		.action-subcategory {
			display: flex; // Corrige un problème de taille
		}
	}
</style>
