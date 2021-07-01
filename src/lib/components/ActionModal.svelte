<script>
	import actions from '$lib/data/actions';
	import Action from './Action.svelte';
	import Modal from './Modal.svelte';

	export let backLink;
	export let slug;

	$: action = actions.find((action) => action.slug === slug);
</script>

<Modal {backLink} isOpen={!!slug}>
	{#if action}
		<Action {action} />
	{:else}
		<p>Oups, cette action est introuvable...</p>
	{/if}
</Modal>

<style lang="scss">
	p {
		margin-bottom: 0;
		text-align: center;
	}
</style>
