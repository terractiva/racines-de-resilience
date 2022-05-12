<script>
	import getFlagEmoji from '$lib/utils/getFlagEmoji';

	export let action;

	$: borderClasses = action.categories.map((category) => `bd-${category}`).join(' ');
	$: textClasses = action.categories.map((category) => `text-${category}`).join(' ');

	function getSourceText(source) {
		const location = [];

		if (source.countrySlug) location.push(getFlagEmoji(source.countrySlug));
		if (source.region) location.push(source.region);
		if (source.department) location.push(source.department);

		if (location.length) {
			if (location.length === 1) return `${source.name} ${location[0]}`;

			return `${source.name} (${location.join(', ')})`;
		}

		return source.name;
	}
</script>

<article class={borderClasses}>
	<header>
		<p class="action-level">
			{#each { length: action.level } as _}∎{/each}
		</p>

		<p class="action-text">{@html action.text}</p>
	</header>

	{#if action.sources.length}
		<p class="action-sources {textClasses}">
			<b>
				{#each action.sources as source, index}
					{#if source.link}<a href={source.link} rel="external" target="_blank"
							>{getSourceText(source)}<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="m14.828 12 1.415 1.414 2.828-2.828a4 4 0 0 0-5.657-5.657l-2.828 2.828L12 9.172l2.828-2.829a2 2 0 1 1 2.829 2.829L14.828 12zM12 14.829l1.414 1.414-2.828 2.828a4 4 0 0 1-5.657-5.657l2.828-2.828L9.172 12l-2.829 2.829a2 2 0 1 0 2.829 2.828L12 14.828z"
									fill="currentColor"
								/><path
									d="M14.829 10.586a1 1 0 0 0-1.415-1.415l-4.242 4.243a1 1 0 1 0 1.414 1.414l4.242-4.242z"
									fill="currentColor"
								/></svg
							></a
						>{:else}{getSourceText(source)}{/if}{#if index !== action.sources.length - 1}<span
							>,
						</span>{/if}
				{/each}
			</b>
		</p>
	{/if}

	{#if action.subcategory.name}
		<p class="action-subcategory">
			<span class="tag is-small"><b>{action.subcategory.name}</b></span>
		</p>
	{/if}
</article>

<style lang="scss">
	article {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 1rem 2rem;

		header {
			margin-bottom: auto;
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
			margin-top: 0.5rem;

			a {
				color: inherit;

				svg {
					height: 2rem;
					vertical-align: sub;
					width: 2rem;
				}
			}
		}

		.action-subcategory {
			display: flex; // Corrige un problème de taille
			margin-top: 0.5rem;
		}
	}
</style>
