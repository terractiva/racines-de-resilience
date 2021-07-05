<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { actionsTreePage, homePage, supportUsPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(homePage);
</script>

<PageMeta page={homePage} />

<section class="section section-title container">
	<h1>
		Énergie, Climat, Effondrement, Résilience...<br />Une fois que tu sais, qu'est-ce qu'on fait ?
	</h1>
</section>

<section class="section section-actions bg-lines-1">
	<div class="container">
		<h2>Trouver ma prochaine action</h2>

		<p>TODO: filtres</p>

		<p>ou</p>

		<a class="button primary" href={actionsTreePage.path}>Explorer l'arbre aux actions</a>
	</div>
</section>

<section class="section section-news container">
	<h2>Actualités</h2>

	<ul>
		<li>
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
		</li>
		<li>
			<div class="card">
				<h3>Programmer le film</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam sapien, lobortis vitae
					mauris ut, volutpat lobortis risus. Ut commodo euismod mauris, lacinia accumsan purus
					iaculis et.
				</p>
			</div>
			<a class="button outline" href={supportUsPage.path}>Bouton</a>
		</li>
		<li>
			<div class="card">
				<h3>Programmer le film</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam sapien, lobortis vitae
					mauris ut, volutpat lobortis risus.
				</p>
			</div>
			<a class="button outline" href={supportUsPage.path}>Bouton</a>
		</li>
	</ul>
</section>

<section class="section section-supporters container">
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
		&.section-title {
			text-align: center;

			h1 {
				margin: 0;
			}
		}

		&.section-actions {
			text-align: center;

			h2 {
				margin-top: 0;
			}
		}

		&.section-news {
			h2 {
				margin-top: 0;
			}

			ul {
				@include utilities.responsive-grid(1fr, repeat(2, 1fr), repeat(3, 1fr));

				list-style: none;
				margin: 0;
				padding: 0;

				li {
					display: flex;
					flex-direction: column;

					div {
						flex: 1;

						h3 {
							margin-top: 0;
						}
					}

					a {
						margin-top: 1rem;
					}
				}
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
	}
</style>
