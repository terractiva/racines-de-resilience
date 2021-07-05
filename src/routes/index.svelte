<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SupportersSection from '$lib/components/SupportersSection.svelte';
	import { actionsTreePage, homePage, supportUsPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(homePage);
</script>

<PageMeta page={homePage} />

<section class="section section-intro container">
	<h1>
		Énergie, Climat, Effondrement, Résilience...<br />Une fois que tu sais, qu'est-ce qu'on fait ?
	</h1>
</section>

<section class="section bg-lines-1 text-center">
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

<SupportersSection />

<style lang="scss">
	section {
		&.section-intro {
			h1 {
				margin-bottom: 0;
				text-align: center;
			}
		}

		&.section-news {
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
	}
</style>
