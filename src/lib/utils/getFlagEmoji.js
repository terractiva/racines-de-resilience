import { countryOther } from '$lib/data/countries';

// Copié depuis https://dev.to/jorik/country-code-to-flag-emoji-a21
export default function getFlagEmoji(countryCode) {
	if (countryCode) {
		if (countryCode === countryOther.slug) return '❔';

		return countryCode
			.toUpperCase()
			.replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt()));
	}

	return '';
}
