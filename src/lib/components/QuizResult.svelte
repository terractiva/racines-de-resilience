<script>
	import InputNames from '$lib/constants/input-names';
	import { actionsPage } from '$lib/constants/pages';
	import Categories from '$lib/data/categories';

	export let category;
	export let isHidden = false;

	const TEXTS = {
		[Categories.Construct]:
			"J'aime faire, inventer, tester. Je rêve d'une maison troglodyte dont les murs seraient comestibles, et d'un réseau de transport efficace zéro émission. Je vous ai déjà parlé de mon omelette sans œufs ?",
		[Categories.Intervene]:
			"Je deviens tout rouge face au manque de respect pour les animaux, les femmes, les démuni·e·s, les enfants, les arbres et les promesses du gouvernement. Je ne vis que pour réveiller les endormi·e·s du ciboulot ! Bon, c'est vrai que je suis un peu à bout...",
		[Categories.Regenerate]:
			"Innnnspirer, eeeexpirer... je suis le monde, le monde est moi, nous sommes relié·e·s. De la sagesse individuelle et collective naîtra la joie qui nous portera vers un avenir paisible et radieux. C'est la Terre qui me l'a dit..."
	};
	const TITLES = {
		[Categories.Construct]: "Ma priorité c'est de construire",
		[Categories.Intervene]: "Mon moyen d'agir privilégié c’est m'interposer",
		[Categories.Regenerate]: "C'est le moment de se régénérer"
	};

	$: text = TEXTS[category];
	$: title = TITLES[category];
</script>

<article class:is-hidden={isHidden}>
	<div>
		<p class="text-{category}"><b>{title}</b></p>
		<p class="mb-0">{text}</p>
	</div>

	<a
		class="button bg-{category}"
		href="{actionsPage.path}?{InputNames.category}={category}#{actionsPage.anchors.filters}"
		>Voir les actions</a
	>
</article>

<style lang="scss">
	article {
		align-items: center;
		display: flex;
		justify-content: center;
		margin: auto;

		&:not(:last-child) {
			margin-bottom: 3rem;
		}

		@include utilities.media-sm {
			flex-direction: column;
		}

		div {
			@include utilities.media-lg {
				max-width: 50%;
			}

			p {
				&:first-child {
					margin-bottom: 0.5rem;
				}
				&:last-child {
					text-align: justify;
				}
			}
		}
	}

	a {
		flex-shrink: 0;

		@include utilities.media-sm {
			margin-top: 1rem;
		}
		@include utilities.media-md-lg {
			margin-left: 3rem;
		}
	}
</style>
