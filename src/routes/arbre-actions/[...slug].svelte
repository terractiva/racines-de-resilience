<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return {
			props: {
				slug: page.params.slug
			}
		};
	}
</script>

<script>
	import ActionModal from '$lib/components/ActionModal.svelte';
	import { actionsTreePage } from '$lib/constants/pages';

	export let slug;
</script>

<ActionModal {slug} backLink={actionsTreePage.path} />
