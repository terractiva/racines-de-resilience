module.exports = {
	extends: ['@commitlint/config-conventional'],
	parserPreset: {
		parserOpts: {
			// Modification de https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-conventionalcommits/parser-opts.js pour accepter les accents
			headerPattern: /^([\wéâ]*)(?:\((.*)\))?!?: (.*)$/
		}
	},
	rules: {
		'subject-case': [2, 'always', 'sentence-case'],
		'subject-max-length': [2, 'always', 72], // Longueur max conseillée dans GitKraken
		'type-enum': [
			2,
			'always',
			['amélioration', 'correction', 'factorisation', 'fonctionnalité', 'tâche']
		]
	}
};
