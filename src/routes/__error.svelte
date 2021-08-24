<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export function load({ status }) {
		return {
			props: {
				status
			}
		};
	}
</script>

<script>
	import ErrorPage from '$lib/components/ErrorPage.svelte';

	export let status;
</script>

<ErrorPage {status} />
