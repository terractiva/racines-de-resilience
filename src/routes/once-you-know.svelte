<script>
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import { actionsTreePage, onceYouKnowPageEN } from '$lib/constants/pages';
	import Section from '$lib/components/Section.svelte';
	import SectionContentTwoThirds from '$lib/components/SectionContentTwoThirds.svelte';
	import currentPage from '$lib/stores/currentPage';
	import SectionContentList from '$lib/components/SectionContentList.svelte';
	import SectionContentListItem from '$lib/components/SectionContentListItem.svelte';

	// TODO: cette page est un copier-coller de la page `une-fois-que-tu-sais`, il mettre en place une vraie gestion de l'i18n

	currentPage.set(onceYouKnowPageEN);
</script>

<PageMeta page={onceYouKnowPageEN} />

<SectionBackground background={Backgrounds.Lines}>
	<SectionIntroduction><i>Roots of Resilience</i> grew out of a film</SectionIntroduction>
</SectionBackground>

<Section>
	<svelte:fragment slot="title"
		><i>Once You Know</i>, an award-winning documentary supporting those who want to take action</svelte:fragment
	>
	<svelte:fragment slot="content">
		<SectionContentTwoThirds>
			<div class="text-justify w-100">
				<p>
					<i>Once You Know</i> is a feature documentary that explores the possibility of climate-induced
					collapse, our dismay in the face of uncertainty, and ways to adapt to unavoidable changes while
					moving towards a desirable future.
				</p>
				<p>
					<strong>Film synopsis</strong><br />
					<i
						><i>ONCE YOU KNOW</i> is the intimate journey of director Emmanuel Cappellin across the abyss
						of a world at the edge of climate-induced collapse. His voyage into this uncharted territory
						is that of a whole generation turning to climate scientists, local democracy, grassroots
						initiatives, and mass rebellion in a courageous search for an exit.</i
					>
				</p>
				<p class="mb-0">
					Profoundly moved by the film’s message, audiences in international festivals and cinemas (<i
						>Once You Know</i
					>
					was theatrically released in France on September 22, 2021) have mobilized to spread the film’s
					impact campaign by organizing post-screening discussions in theaters, and distributing an Action
					Guide with over a 150 concrete ways to address issues related to energy, climate, collapse,
					and resilience. A
					<a
						href="https://www.boutique.racinesderesilience.org/index.php/produit/frune-fois-que-tu-sais-guide-daction/"
						rel="external"
						target="_blank">print version of this Guide is available</a
					>
					for French speakers.<br />
					The collaborative online version of this Action Guide, designed to be a solutions-oriented
					and action-oriented portal for all, is currently available in French on our
					<a href={actionsTreePage.path}>Tree of actions</a>
					page and will soon be available in English at <i>Roots-of-resilience.net</i>.<br />
					If you would like to support our research efforts to create the English version of the Tree
					of action, you can join our community of volunteers and submit action-oriented resources by
					writing to us at
					<a href="mailto:contact@racinesderesilience.org" rel="external"
						>contact@racinesderesilience.org</a
					>.
				</p>
			</div>
			<div class="image-one-wrapper">
				<img
					alt=""
					class="floating-image"
					src="/illustrations/oiseaux-2.png"
					srcset="/illustrations/oiseaux-2.png 1x, /illustrations/oiseaux-2-2x.png 2x"
				/>
			</div>
		</SectionContentTwoThirds>
	</svelte:fragment>
</Section>

<SectionBackground background={Backgrounds.Marks}>
	<Section>
		<svelte:fragment slot="title">Watch the film</svelte:fragment>
		<svelte:fragment slot="content">
			<SectionContentList>
				<SectionContentListItem
					isExternalLink
					link="mailto:sales@pulp-films.fr"
					linkStyle="primary"
				>
					<svelte:fragment slot="title">On the big screen</svelte:fragment>
					<svelte:fragment slot="text">
						The film can easily be programmed at your local theater or any other venue. To organize
						a public screening with friends, schoolmates, colleagues, family or community, please
						contact <i>Once You Know</i>'s International Vendor
						<a href="mailto:sales@pulp-films.fr" rel="external" target="_blank">Pulp Films</a>.<br
						/>
						For screenings in France, Swiss ou Belgium, please contact <i>Once You Know</i>'s
						distributor <a href="mailto:contact@nourfilms.com" ref="external">Nour Films</a>.
					</svelte:fragment>
					<svelte:fragment slot="link">Book a screening</svelte:fragment>
				</SectionContentListItem>

				<SectionContentListItem
					isExternalLink
					link="https://www.umw-originals.com/watch-once-you-know"
					linkStyle="primary"
				>
					<svelte:fragment slot="title">VOD and streaming</svelte:fragment>
					<svelte:fragment slot="text">
						<a
							href="https://www.tickettailor.com/events/pulpfilms/665200"
							rel="external"
							target="_blank">Earth Day Special Event :</a
						>
						April 8th to 23rd, folks everywhere who purchase <i>Once You Know</i> on VOD will be
						granted free access to an exceptional webinar with the film director and featured
						experts on April 22nd (7PM Central European Time ; 1PM Eastern Standard Time, and 10 AM
						Pacific Time Zone).<br />
						<a href="https://www.kanopy.com/product/once-you-know" rel="external" target="_blank"
							>Free VOD :</a
						>
						for US-based folks, the film is available on Kanopy, an educational streaming platform accessible
						for free with a college, university or public library membership.<br />
						<a href="https://vimeo.com/ondemand/unefoisquetusais" rel="external" target="_blank"
							>French VOD :</a
						>
						For France, Belgium and Switzerland-based folks, VOD is already available on Vimeo Pay-Per-View
						and on all French VOD and streaming platforms.<br />
						<a
							href="https://www.umw-originals.com/watch-once-you-know"
							rel="external"
							target="_blank">VOD :</a
						> Starting April 23rd, VOD becomes available on all major online platforms, worldwide.
					</svelte:fragment>
					<svelte:fragment slot="link">VOD rental</svelte:fragment>
				</SectionContentListItem>

				<SectionContentListItem
					isExternalLink
					link="https://www.videoproject.org/once-you-know.html"
					linkStyle="primary"
				>
					<svelte:fragment slot="title">DVD and Educational licences</svelte:fragment>
					<svelte:fragment slot="text">
						<a href="https://www.videoproject.org/once-you-know.html" rel="external" target="_blank"
							>DVD :</a
						> US-based and Canada-based folks can purchase a DVD copy of the film through our educational
						distributor Video Project.
					</svelte:fragment>
					<svelte:fragment slot="link">Purchase the DVD</svelte:fragment>
				</SectionContentListItem>
			</SectionContentList>
			<p class="mb-0">
				<br />
				<strong>For more information</strong><br />
				For the latest news on where to watch <i>Once You Know</i>, please visit
				<i>Once You Know</i>'s
				<a href="https://pulp-films.fr/project/once-you-know/" rel="external" target="_blank"
					>official webpage</a
				>
				and socials (<a
					href="https://www.facebook.com/UneFoisQueTuSais"
					rel="external"
					target="_blank">FB</a
				>,
				<a href="https://www.instagram.com/_onceyouknow/" rel="external" target="_blank"
					>Instagram</a
				>, <a href="https://twitter.com/onceyouknowfilm" rel="external" target="_blank">Twitter</a>,
				<a href="https://www.tiktok.com/@_onceyouknow" rel="external" target="_blank">TikTok</a>).
			</p>
		</svelte:fragment>
	</Section>
</SectionBackground>

<Section id={onceYouKnowPageEN.anchors.animateDiscussion}>
	<svelte:fragment slot="title">Facilitating post-screening discussions</svelte:fragment>
	<svelte:fragment slot="content">
		<p class="text-justify">
			If <i>Once You Know</i> and its impact campaign resonate with you,
			<strong
				>you can help spread the film’s message of hope and the necessary discussions it triggers by
				becoming a film facilitator</strong
			>. Facilitators accompany public and private audiences, encouraging the audience to face
			emotions which can sometimes be destabilizing but which are always needed to spur action.<br
			/>
			You too, take advantage of the film and tools developed by the non-profit organization
			<i>Terractiva</i>
			for <i>Once You Know</i>’s impact campaign <i>Once You Know, what do we do?</i> to spread awareness
			and generate positive change. Different levels of involvement are possible.
		</p>
		<SectionContentList>
			<SectionContentListItem isExternalLink link="https://pulp-films.fr/project/once-you-know/">
				<svelte:fragment slot="title">First step</svelte:fragment>
				<svelte:fragment slot="text">
					<strong>Let people know about <i>Once You Know</i></strong> on your socials (<a
						href="https://www.facebook.com/UneFoisQueTuSais"
						rel="external"
						target="_blank">FB</a
					>,
					<a href="https://www.instagram.com/_onceyouknow/" rel="external" target="_blank"
						>Instagram</a
					>,
					<a href="https://twitter.com/onceyouknowfilm" rel="external" target="_blank">Twitter</a>,
					<a href="https://www.tiktok.com/@_onceyouknow" rel="external" target="_blank">TikTok</a>)
					and beyond, in the real world, and engage them on issues related to energy, climate,
					systemic risks, and resilience.
				</svelte:fragment>
				<svelte:fragment slot="link">Film's official page</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem isExternalLink link="mailto:sales@nourfilms.com">
				<svelte:fragment slot="title">Intermediate leap</svelte:fragment>
				<svelte:fragment slot="text"
					><strong>Organize a screening</strong>, in a theater or elsewhere, with or without
					post-screening facilitation, with the help of our international distributor
					<i>Pulp Films</i>.</svelte:fragment
				>
				<svelte:fragment slot="link">International sales contact</svelte:fragment>
			</SectionContentListItem>

			<SectionContentListItem
				isExternalLink
				link="/fichiers/Once_You_Know_-_Facilitation_Guide_-_ENGLISH.pdf"
			>
				<svelte:fragment slot="title">Big jump</svelte:fragment>
				<svelte:fragment slot="text">
					<strong>Become a post-screening facilitator.</strong> Download our Facilitation Guide to
					easily learn how to host a post-screening conversation encouraging everyone’s
					participation. The facilitation process and activities suggested are inspired by
					<i>The Work That Reconnects</i>, which was developed over several decades by American
					scholar and ecopsychologist Joanna Macy.
				</svelte:fragment>
				<svelte:fragment slot="link">Download Facilitation Guide</svelte:fragment>
			</SectionContentListItem>
		</SectionContentList>
	</svelte:fragment>
</Section>

<SectionBackground background={Backgrounds.Strokes}>
	<Section>
		<svelte:fragment slot="title">Free post-screening resources for all</svelte:fragment>
		<svelte:fragment slot="content">
			<p class="text-justify mb-0">
				Whether you are at home with family and friends or at a theater venue, post-screening
				resources have been developed so you can encourage open-hearted discussions on issues
				related to energy, climate, systemic risks, and resilience :
			</p>
			<ul class="mb-0">
				<li>
					Group screenings : download our <a
						href="/fichiers/Once_You_Know_-_Facilitation_Guide_-_ENGLISH.pdf"
						rel="external"
						target="_blank">Facilitation Guide</a
					>
				</li>
				<li>
					Home screenings (English) : <a
						href="https://soundcloud.com/user-203289413-671053709/guided-discussion-english-once-you-know-post-screening"
						rel="external"
						target="_blank">listen to our pre-recorded Discussion Guide</a
					>
				</li>
				<li>
					Home screenings (Spanish) : <a
						href="https://soundcloud.com/user-203289413-671053709/guided-discussion-espanol"
						rel="external"
						target="_blank">listen to our pre-recorded Discussion Guide</a
					>
				</li>
				<li>
					Home screenings (Spanish) : <a
						href="https://youtu.be/1SeNctfWc_8"
						rel="external"
						target="_blank">watch a post-screening discussion</a
					> hosted by the Council on the Uncertain Human Future
				</li>
			</ul>
		</svelte:fragment>
	</Section>
</SectionBackground>

<style lang="scss">
	.image-one-wrapper {
		align-self: stretch;
		justify-self: stretch;
		position: relative;

		@include utilities.media-sm {
			order: -1;
			text-align: center;
		}

		img {
			height: auto;

			@include utilities.media-sm {
				width: 50%;
			}
			@include utilities.media-md-lg {
				bottom: 50%;
				max-width: initial;
				position: absolute;
				transform: translateY(50%);
			}
			@include utilities.media-md {
				left: -1.5rem;
				width: 120%;
			}
			@include utilities.media-lg {
				left: 0;
				width: 100%;
			}
		}
	}
</style>
