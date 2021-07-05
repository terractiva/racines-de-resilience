<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SupportersSection from '$lib/components/SupportersSection.svelte';
	import { supportUsPage } from '$lib/constants/pages';
	import { layoutContext } from '$lib/contexts';
	import { getContext } from 'svelte';

	const { setCurrentPage } = getContext(layoutContext);

	setCurrentPage(supportUsPage);
</script>

<PageMeta page={supportUsPage} />

<section class="section-intro container">
	<p>
		<i
			>L'association Terractiva porte le site collaboratif Racines de Résilience grâce à du mécénat
			et du travail bénévole. Une communauté de volontaires, de soutiens et de partenaires se sont
			déjà engagés.<br />Devenez vous aussi soutien de ce projet collectif !</i
		>
	</p>
</section>

<section class="section section-support container">
	<h2 class="text-center">Quatre manières de soutenir financièrement Racines de résilience</h2>

	<ul>
		<li>
			<p>
				Pour soutenir l'accompagnement du film, des artistes ont produit des affiches collector du
				film Une fois que tu sais.<br />
				Choisissez une affiche illustrée imprimée en risographie (technique d'impression mécanique artisanale)
				et faites-vous un cadeau en soutenant Racines de Résilience !
			</p>

			<a class="button primary" href="TODO:" rel="external" target="_blank"
				>Acheter une affiche collector</a
			>
		</li>

		<li>
			<p>
				Maxime Steiner, le compositeur de la musique du film Une fois que tu sais a lui aussi choisi
				de soutenir la Campagne d'accompagnement avec son travail.
			</p>

			<a class="button primary" href="TODO:" rel="external" target="_blank"
				>Acheter la bande son podcast</a
			>
		</li>

		<li>
			<p>
				Un financement participatif a été mis en place pour permettre à quiconque de soutenir la
				campagne d'impact du film. Structures, individus, tout le monde peut donner à sa hauteur
				pour soutenir le projet.<br />
				Si votre structure figure sur le site, merci de considérer de soutenir Racines de Résilience
				:)
			</p>

			<a class="button primary" href="TODO:" rel="external" target="_blank"
				>Contribuer au financement participatif</a
			>
		</li>

		<li>
			<p>
				Vous ou votre structure pouvez aussi devenir mécènes en faisant des dons ou du mécénat de
				compétences pour faire vivre le projet.
			</p>

			<a class="button primary" href="TODO:" rel="external" target="_blank">Devenir mécène</a>
		</li>
	</ul>
</section>

<SupportersSection />

<style lang="scss">
	section {
		.section-intro {
			p {
				margin-bottom: 0;
			}
		}

		&.section-support {
			ul {
				@include utilities.responsive-grid(1fr, repeat(2, 1fr), repeat(2, 30%));

				justify-content: space-evenly;
				list-style: none;
				margin: 0;
				padding: 0;

				li {
					display: flex;
					flex-direction: column;

					p {
						flex: 1;
					}
				}
			}
		}
	}
</style>
