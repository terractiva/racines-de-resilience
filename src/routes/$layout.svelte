<script>
	import '../app.scss';
</script>

<style lang="scss">
	$header-height: 60px;

	:global(html) {
		height: 100%;
	}

	:global(body) {
		height: 100%;
	}

	header {
		align-items: center;
		background: rgb(240, 240, 240);
		display: flex;
		height: $header-height;
		padding: 0 20px;

		p {
			margin: 0;
		}
	}

	main {
		height: calc(100% - #{$header-height});
		overflow: hidden;
	}
</style>

<header>
	<p>Racines de résilience</p>
</header>

<main>
	<slot />
</main>
