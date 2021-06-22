<script>
	export let action;

	$: borderClasses = action.categories.map((category) => `bd-${category}`).join(' ');
	$: textClasses = action.categories.map((category) => `text-${category}`).join(' ');
	$: levelArray = new Array(action.level);
</script>

<article class={borderClasses}>
	<header>
		<p><b>{action.subcategory}</b></p>

		<p>
			{#each levelArray as _}∎{/each}
		</p>
	</header>

	<p>{@html action.text}</p>

	<footer>
		<p class={textClasses}>
			<b>
				{#each action.sources as source, index}
					<a href={source.link}>{source.name}</a>{#if index !== action.sources.length - 1}<span
							>,
						</span>{/if}
				{/each}
			</b>
		</p>
	</footer>
</article>

<style lang="scss">
	article {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
		padding: 1rem 2rem;

		header {
			display: flex;

			p {
				margin: 0;

				&:first-child {
					flex: 1;
				}

				&:last-child {
					user-select: none;
				}
			}
		}

		& > p {
			margin: 0.5rem 0;
		}

		footer {
			p {
				margin: 0;

				a {
					color: inherit;
				}
			}
		}
	}
</style>
