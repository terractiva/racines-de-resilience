<script context="module">
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
