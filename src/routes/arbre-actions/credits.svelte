<script>
	import Modal from '$lib/components/Modal.svelte';
	import { actionsTreePage } from '$lib/constants/pages';
</script>

<Modal isOpen backLink={actionsTreePage.path}>
	<ul>
		<li>
			<strong>Illustration</strong>
			<a href="https://www.theotimenoel.com/" rel="external" target="_blank">Théotime Noël</a>
		</li>
		<li>
			<strong>Conception graphique</strong>
			<a href="https://elypss.fr/" rel="external" target="_blank">Loïc Cimelière/Elypss</a>
		</li>
		<li>
			<strong>Conception éditoriale et recherches</strong>
			<a href="https://brianneparquier.fr/" rel="external" target="_blank">Brianne Parquier</a>,
			Charlotte Ogier, Emmanuel Cappellin
		</li>
	</ul>
</Modal>

<style lang="scss">
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
