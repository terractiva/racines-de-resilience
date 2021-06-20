<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { aboutPage, actionsTreePage, homePage, supportUsPage } from '$lib/constants/pages';
</script>

<PageMeta page={homePage} />

<section class="section-title container">
	<h1>
		Énergie, Climat, Effondrement, Résilience...<br />Une fois que tu sais, qu'est-ce qu'on fait ?
	</h1>
</section>

<section class="section-actions">
	<div class="container">
		<h2>Trouver ma prochaine action</h2>

		<p>TODO: filtres</p>

		<p>ou</p>

		<a class="button primary" href={actionsTreePage.path}>Explorer l'arbre aux actions</a>
	</div>
</section>

<section class="section-news container">
	<h2>Actualités</h2>

	<div>
		<div>
			<div class="card">
				<h3>Programmer le film</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam sapien, lobortis vitae
					mauris ut, volutpat lobortis risus. Ut commodo euismod mauris, lacinia accumsan purus
					iaculis et. Donec leo nisl, maximus sed sapien nec, euismod facilisis arcu. Nullam semper
					suscipit condimentum.
				</p>
			</div>
			<a class="button outline" href={supportUsPage.path}>Bouton</a>
		</div>
		<div>
			<div class="card">
				<h3>Programmer le film</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam sapien, lobortis vitae
					mauris ut, volutpat lobortis risus. Ut commodo euismod mauris, lacinia accumsan purus
					iaculis et. Donec leo nisl, maximus sed sapien nec, euismod facilisis arcu. Nullam semper
					suscipit condimentum.
				</p>
			</div>
			<a class="button outline" href={supportUsPage.path}>Bouton</a>
		</div>
		<div>
			<div class="card">
				<h3>Programmer le film</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam sapien, lobortis vitae
					mauris ut, volutpat lobortis risus. Ut commodo euismod mauris, lacinia accumsan purus
					iaculis et. Donec leo nisl, maximus sed sapien nec, euismod facilisis arcu. Nullam semper
					suscipit condimentum.
				</p>
			</div>
			<a class="button outline" href={supportUsPage.path}>Bouton</a>
		</div>
	</div>
</section>

<section class="section-origin container">
	<h2>Les origines du projet</h2>
	<a class="button outline primary" href={aboutPage.path}>En savoir +</a>
</section>

<section class="section-supporters container">
	<div class="section-header">
		<h2>Ils nous soutiennent</h2>
		<a class="button outline" href={supportUsPage.path}>Nous soutenir</a>
	</div>

	<div>
		<div />
		<div />
		<div />
		<div />
		<div />
	</div>
</section>

<style lang="scss">
	section {
		padding: 5rem 0;

		&.section-title {
			text-align: center;

			h1 {
				margin: 0;
			}
		}

		&.section-actions {
			background: var(--bg-secondary-color);
			text-align: center;

			h2 {
				margin-top: 0;
			}
		}

		&.section-news {
			h2 {
				margin-top: 0;
			}

			& > div {
				display: grid;
				gap: var(--grid-gutter);
				grid-template-columns: repeat(3, 1fr);

				& > div {
					display: flex;
					flex-direction: column;

					h3 {
						margin-top: 0;
					}

					a {
						margin-top: 1rem;
					}
				}
			}
		}

		&.section-origin {
			align-items: center;
			display: flex;
			justify-content: center;
			text-align: center;

			h2 {
				align-items: center;
				display: flex;
				justify-content: center;
				margin: 0;
			}

			a {
				margin-left: 2rem;
			}
		}

		&.section-supporters {
			h2 {
				align-items: center;
				display: flex;
				justify-content: space-between;
				margin-top: 0;
			}

			& > div {
				&.section-header {
					align-items: flex-start;
					display: flex;
					justify-content: space-between;
				}

				&:not(.section-header) {
					display: grid;
					gap: var(--grid-gutter);
					grid-template-columns: repeat(6, 1fr);

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
		}
	}
</style>
