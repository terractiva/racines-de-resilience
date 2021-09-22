<script>
	import Section from './Section.svelte';
	import SectionContentTwoThirds from './SectionContentTwoThirds.svelte';
</script>

<Section>
	<svelte:fragment slot="title"><slot name="title" /></svelte:fragment>

	<svelte:fragment slot="content">
		<SectionContentTwoThirds>
			<p class="text-justify w-100 mb-0">
				Aujourd'hui, la part du numérique dans les émissions de gaz à effet de serre est estimée à
				3,5% à l'échelle mondiale et 3,2% à l'échelle française, avec une croissance annuelle de
				l'ordre de 6% (d'après <a
					href="https://theshiftproject.org/article/impact-environnemental-du-numerique-5g-nouvelle-etude-du-shift/"
					rel="external"
					target="_blank">The Shift Project</a
				>
				et
				<a
					href="https://www.greenit.fr/2020/06/23/quels-sont-les-impacts-environnementaux-du-numerique-en-france/"
					rel="external"
					target="_blank">Green IT</a
				>, les chiffres varient selon les sources).<br />
				Afin d'être en phase avec les idées qu'il veut faire passer et de minimiser son impact environnemental,
				ce site a été conçu en gardant un esprit low-tech. Cela passe notamment par un continuel questionnement
				sur les fonctionnalités développées, les éléments ajoutés au design ou les outils utilisés. Cette
				façon de faire permet d'obtenir un site léger, accessible et efficace. L'idée derrière est très
				simple : plus un site est léger, plus la consommation électrique et l'usure des équipements impliqués
				(serveur, box Internet, ordinateur, etc.) sera réduit.<br />
				Vous pouvez en apprendre plus sur la conception du site sur
				<a
					href="https://github.com/Terractiva/racines-de-resilience#conception-low-tech"
					rel="external"
					target="_blank">son dépôt GitHub (bientôt disponible)</a
				>.
			</p>
			<slot name="right-content" />
		</SectionContentTwoThirds>
	</svelte:fragment>
</Section>
