<script>
	import { ownerMail, ownerName } from '$lib/constants/identity';
	import {
		aboutPage,
		actionsPage,
		actionsTreePage,
		communityPage,
		homePage,
		quizPage,
		supportUsPage
	} from '$lib/constants/pages';
	import { gitHubLink } from '$lib/constants/settings';

	const pages = [
		homePage,
		quizPage,
		actionsPage,
		actionsTreePage,
		supportUsPage,
		communityPage,
		aboutPage
	];
</script>

<footer>
	<div class="container">
		<div class="footer-links">
			<p>
				Ce site est hébergé par <a
					href="https://www.infomaniak.com/fr"
					rel="external"
					target="_blank"
					>Infomaniak <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"
						><g fill="none" fill-rule="evenodd"
							><rect fill="#0098FF" fill-rule="nonzero" width="300" height="300" rx="30" /><path
								fill="#FFF"
								d="M64 250.8h62.4V210l22.778-21.963L181.6 250.8h69l-60.85-101.618L247 94.799h-75l-45.6 51.6V0H64z"
							/></g
						></svg
					></a
				>.
			</p>
			<p>
				Le code source est disponible sur <a href={gitHubLink} rel="external" target="_blank"
					>GitHub</a
				>. Toute contribution est bienvenue.
			</p>
		</div>

		<div class="footer-contact">
			<p><b>Contact</b></p>

			<a href={`mailto:${ownerMail}`} rel="external">{ownerMail}</a>
		</div>

		<div class="footer-map">
			<p><b>Plan du site</b></p>

			<ul>
				{#each pages as page}
					<li>
						<a href={page.path}>{page.label}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<p>{ownerName} © 2021</p>
</footer>

<style lang="scss">
	footer {
		background: var(--bg-secondary-color);
		padding-bottom: 1rem;
		padding-top: 4rem;

		& > div {
			@include utilities.responsive-grid(1fr, repeat(2, 1fr), repeat(3, 1fr));

			margin-bottom: 4rem;

			a {
				color: var(--color-darkGrey);
			}

			.footer-links,
			.footer-contact {
				a {
					text-decoration: underline;
				}
			}

			.footer-links {
				p {
					svg {
						display: inline-block;
						height: 3rem;
						vertical-align: sub;
						width: 3rem;
					}

					&:last-child {
						margin-bottom: 0;
					}
				}
			}

			.footer-map {
				ul {
					list-style: none;
					margin: 0;
					padding: 0;
				}
			}
		}

		& > p {
			margin-bottom: 0;
			text-align: center;
		}
	}
</style>
