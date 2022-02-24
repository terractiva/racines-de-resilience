<script>
	import Modal from '$lib/components/Modal.svelte';
	import { guidedTalkPage } from '$lib/constants/pages';
</script>

<Modal backLink={guidedTalkPage.path} isOpen={true}>
	<div>
		<iframe
			allowfullscreen
			frameborder="0"
			height="315"
			sandbox="allow-same-origin allow-scripts allow-popups"
			src="https://tube.nocturlab.fr/videos/embed/c0749df2-fcfa-4a3e-b4ab-c5e8bae9a6a7"
			title={`Animation "Une fois que tu sais, qu'est-ce qu'on fait" à L'espace Saint-Michel le 1er octobre 2021`}
			width="560"
		/>
	</div>

	<div>
		<a
			class="button primary w-100"
			href="https://tube.nocturlab.fr/videos/watch/c0749df2-fcfa-4a3e-b4ab-c5e8bae9a6a7"
			rel="external"
			target="_blank">Voir la vidéo sur PeerTube</a
		>
	</div>
</Modal>

<style lang="scss">
	div:first-child {
		margin-bottom: 1rem;
		position: relative;

		@include utilities.media-lg {
			width: 640px; // Au-delà la vidéo se lance en 1080p
		}

		&::before {
			content: '';
			display: block;
			padding-bottom: 56.25%; // 100 * 315 / 560
		}

		iframe {
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
		}
	}
</style>
