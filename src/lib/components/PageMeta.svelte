<script>
	import { websiteName } from '$lib/constants/identity';

	export let page;
</script>

<svelte:head>
	<title>{page.title ? `${page.title} • ${websiteName}` : websiteName}</title>
	{#if page.description}
		<meta name="description" content={page.description} />
	{/if}
</svelte:head>
