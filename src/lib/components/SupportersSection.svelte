<section class="section container">
	<h2>Racine de résilience existe grâce à nos mécènes et partenaires... merci à eux !</h2>

	<div>
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
	</div>
</section>

<style lang="scss">
	section {
		h2 {
			align-items: center;
			display: flex;
			justify-content: space-between;
		}

		& > div {
			@include utilities.responsive-grid(repeat(3, 1fr), repeat(6, 1fr), repeat(6, 1fr));

			& > div {
				background: var(--bg-secondary-color);

				&::before {
					content: '';
					display: block;
					padding-bottom: 100%;
				}
			}
		}
	}
</style>
