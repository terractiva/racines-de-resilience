<script>
	import { homePage } from '$lib/constants/pages';

	export let status;
</script>

<section class="container">
	<h1>{status}</h1>

	<p>Oups, il y a eu une erreur...</p>

	<a href={homePage.path} class="button">Revenir à l'accueil</a>
</section>

<style lang="scss">
	section {
		text-align: center;

		h1 {
			margin-top: 0;
		}
	}
</style>
