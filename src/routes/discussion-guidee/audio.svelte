<script>
	import Modal from '$lib/components/Modal.svelte';
	import InputNames from '$lib/constants/input-names';
	import { actionsPage, actionsTreePage, guidedTalkPage, quizPage } from '$lib/constants/pages';
	import Categories from '$lib/data/categories';
</script>

<Modal isLarge isOpen backLink={guidedTalkPage.path}>
	<iframe
		allow="autoplay"
		frameborder="no"
		height="166"
		scrolling="no"
		src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1229809813&color=%23985d5a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
		title="Discussion guidée"
		width="100%"
	/>

	<div>
		<a
			class="button primary w-100"
			href="https://soundcloud.com/user-203289413-671053709/discussion-guidee"
			rel="external"
			target="_blank">Écouter la discussion guidée sur SoundCloud</a
		>
	</div>

	<p>
		Après avoir visionné le film, pouvez écouter l’enregistrement ci-dessus et simplement vous
		laisser guider pour prendre un temps de recul sur le film et son message, inspiré du travail de
		l’écopsychologue Joanna Macy.<br />
		Si vous avez besoin de repères ou que vous souhaitez faire cela à l’écrit
		<i>(notamment si vous êtes seul)</i> voici un résumé de ce qui vous est proposé :
	</p>

	<details>
		<summary><b>Pop corn de mots</b> > Aller à la minute 1:35</summary>
		<p>
			Exprimez-vous en un mot pour dire comment vous vous sentez à la fin du visionnage de ce film.
			Vous pouvez vous exprimer plusieurs fois.<br />
			<i>Si vous êtes seul·e, mettez ces mots par écrit.</i>
		</p>
	</details>

	<details>
		<summary><b>Qui comme moi...</b> > Aller à la minute 1:55</summary>
		<p>
			Prenez la parole à tour de rôle en posant une question simple et courte qui commence par « Qui
			comme moi ...? »<br />
			En réponse, les autres personnes présentes peuvent vous signifier d’un geste qu’elles ont ce point
			en commun avec vous.<br />
			Par exemple : quelqu’un dit : « Qui comme moi a un ou des enfants? » Les autres parents dans la
			salle se font un signe de la main.<br />
			Vous pouvez en faire autant que vous le souhaitez.<br />
			<i>Si vous êtes seul·e, passez à la proposition suivante.</i>
		</p>
	</details>

	<details>
		<summary><b>Phrase ouverte 1</b> > Aller à la minute 3:16</summary>
		<p>
			Poursuivez la phrase « Un moment de ma vie où je me suis senti.e intensément vivant·e c'est...
			»<br />
			<i>Si vous êtes seul·e, écrivez ce début de phrase puis racontez-vous ce moment à l’écrit.</i>
		</p>
	</details>

	<details>
		<summary><b>Phrase ouverte 2</b> > Aller à la minute 9:34</summary>
		<p>
			Poursuivez la phrase « Quand je pense aux conséquences des changements climatiques sur ma vie,
			mes proches et ma communauté locale, ce que je ressens c'est... »<br />
			<i
				>Si vous êtes seul·e, écrivez ce début de phrase puis mettez ce que vous ressentez à
				l’écrit.</i
			>
		</p>
	</details>

	<details>
		<summary><b>Phrase ouverte 3</b> > Aller à la minute 15:16</summary>
		<p>
			Poursuivez la phrase « Si j’imagine que dans 30 ans mon territoire s’est adapté pour devenir
			plus résilient, ce que j’observe concrètement autour de moi c’est... »<br />
			<i
				>Si vous êtes seul·e, écrivez ce début de phrase puis mettez ce que vous imaginez sur
				papier.</i
			>
		</p>
	</details>

	<details>
		<summary><b>Et maintenant, qu’est-ce qu’on fait ?</b> > Aller à la minute 20:12</summary>
		<div>
			<p>
				Il est clair que face à l’effondrement climatique et à ses répercussions sur nos sociétés,
				la réponse ne peut être que plurielle, collective et systémique. Nous avons créé <a
					href={actionsTreePage.path}
					>un grand arbre illustré avec <strong>plus de 150 actions</strong></a
				>
				et plus encore de structures associées. Son objectif est de
				<strong>mettre en synergie les structures existantes, de les valoriser</strong>
				pour montrer la richesse et la diversité des initiatives de transition.<br />
				Cet arbre, <strong>« Racines de résilience »</strong>, existe en format numérique ou
				<a
					href="https://www.boutique.racinesderesilience.org/index.php/produit/frune-fois-que-tu-sais-guide-daction/"
					rel="external"
					target="_blank">en format papier</a
				> que vous pouvez vous procurer via le site.
			</p>
			<p>
				Les actions y sont regroupées selon 3 piliers du changement de cap, issus du Travail qui
				Relie, dont les propositions ci-dessus s’inspirent largement.<br />
				Ces trois piliers, ces trois axes d’engagement indispensables pour une société résiliente sont
				:
			</p>
			<ul>
				<li>
					<a
						href="{actionsPage.path}?{InputNames.category}={Categories.Construct}#{actionsPage
							.anchors.filters}">Construire</a
					> : des alternatives pour préserver le climat et le vivant,
				</li>
				<li>
					<a
						href="{actionsPage.path}?{InputNames.category}={Categories.Regenerate}#{actionsPage
							.anchors.filters}">Régénérer</a
					> : changer de culture pour respecter le climat et le vivant,
				</li>
				<li>
					<a
						href="{actionsPage.path}?{InputNames.category}={Categories.Intervene}#{actionsPage
							.anchors.filters}">S’interposer</a
					> : stopper les destructions qui impactent le climat et le vivant.
				</li>
			</ul>
			<p>
				Nous espérons qu’en parcourant cet arbre vous trouverez des <strong
					>actions qui correspondent</strong
				>
				à vos centres d'intérêt, possibilités d’engagement, et localisation. Pour vous aider à sentir
				quel axe d’engagement vous correspond le plus,
				<a href={quizPage.path}>testez votre profil</a> en répondant au questionnaire humoristique qui
				dépeint les différentes personnalités qu’on observe dans le passage à l’action.
			</p>
			<p>
				Et puisqu’un arbre est vivant, vos contributions et ajouts sont les bienvenus pour faire
				grandir ces Racines de résilience, en ajoutant les <a
					href="https://airtable.com/shrlqNJvuiem0iFkA"
					rel="external"
					target="_blank">actions et structures</a
				> que vous connaissez et qui favorisent la mise en action sur les thèmes énergie, climat, effondrement
				et résilience.
			</p>
			<p>
				À vous de vous poser la question : <strong
					>Que pourrait-on faire, maintenant, et concrètement ?</strong
				>
			</p>
		</div>
	</details>
</Modal>

<style lang="scss">
	iframe {
		display: block;
		margin-bottom: 1rem;
	}

	iframe ~ div {
		margin-bottom: 1.5rem;
	}

	p {
		text-align: justify;
	}

	details {
		&:not(:last-child) {
			margin-bottom: 1rem;
		}

		summary {
			cursor: pointer;
		}
	}
</style>
