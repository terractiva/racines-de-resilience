<script>
	import Modal from '$lib/components/Modal.svelte';
	import { actionsPage, actionsTreePage } from '$lib/constants/pages';
</script>

<Modal backLink={actionsTreePage.path} isOpen={true}>
	<div class="buttons-wrapper">
		<a class="button primary" href="{actionsPage.path}#{actionsPage.anchors.filters}"
			>Découvrir plus d'actions</a
		>
		<a
			class="button primary"
			href="https://framaforms.org/faire-grandir-larbre-1631182360"
			rel="external"
			target="_blank">Faire grandir l'arbre</a
		>
	</div>

	<p><b>Par où commencer ?</b></p>
	<p>
		Selon notre humeur, plus ou moins aventureuse, on peut laisser le regard vagabonder au gré des
		dessins, des racines, et des mots clefs ou bien démarrer l'exploration par deux points d'entrée
		:
	</p>
	<ol>
		<li>
			<p>
				<strong>Par le centre de l'arbre</strong> en découvrant les cinq qualités d'un arbre et d'une
				société résiliente, puis en descendant les racines et choisissant entre les ramifications jusqu'à
				s'arrêter sur une action correspondant au niveau d'implication souhaité,
			</p>
		</li>
		<li>
			<p>
				<strong>Par la periphérie de l'arbre</strong> en choisissant l'un des grands verbes clefs qui
				résument les nuages d'actions qui les entourent.
			</p>
		</li>
	</ol>
</Modal>

<style lang="scss">
	.buttons-wrapper {
		display: flex;
		justify-content: center;
		margin-bottom: 1.5rem;

		@include utilities.media-sm {
			align-items: center;
			flex-direction: column;

			a {
				margin-left: 0;

				&:not(:last-child) {
					margin-bottom: 1rem;
				}
			}
		}
	}

	p {
		text-align: justify;
	}
</style>
