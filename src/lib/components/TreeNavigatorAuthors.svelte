<p>
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
		><path
			d="M11 10.98a1 1 0 112 0v6a1 1 0 11-2 0v-6zM12 6.051a1 1 0 100 2 1 1 0 000-2z"
			fill="currentColor"
		/><path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1016 0 8 8 0 00-16 0z"
			fill="currentColor"
		/></svg
	>
	<a href="https://www.theotimenoel.com/" rel="external" target="_blank">
		Théotime Noël
	</a>,&nbsp;<a href="https://elypss.fr/" rel="external" target="_blank"> Loïc Cimelière/Elypss </a>
</p>

<style lang="scss">
	$height: 2rem;

	p {
		@include utilities.pill();

		align-items: center;
		bottom: 1rem;
		line-height: $height;
		left: 1rem;
		margin: 0;
		padding-right: 1rem;
		position: fixed;

		svg {
			height: $height;
			margin-right: 0.5rem;
			width: $height;
		}

		a {
			color: var(--color-darkGrey);
		}
	}
</style>
