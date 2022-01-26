<script>
	export let category;
</script>

<span class="{category} text-{category}" />

<style lang="scss">
	span {
		display: block;
		height: 2.4rem;
		width: 2.4rem;

		&::before {
			position: relative;
			line-height: 2.4rem;
		}

		&.construire::before {
			content: '●';
			font-size: 200%;
			left: -2px;
			top: -1px;
		}
		&.interposer::before {
			content: '▲';
			font-size: 255%;
			left: -3px;
			top: -1px;
		}
		&.regenerer::before {
			content: '⬟';
			font-size: 200%;
			left: -2px;
			top: -3px;
		}
	}
</style>
