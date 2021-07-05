# Racines de résilience

## Mise en ligne après un changement

Les déploiements automatiques sont déclenchés lors d'une action sur la branche `site`, par exemple en faisant une pull request :

- [Créer une pull request de `master` sur `site`](https://github.com/Terractiva/racines-de-resilience/compare/site...master)
- Cliquer sur _Rebase and merge_
- Suivre l'évolution du déploiement dans l'[onglet Actions](https://github.com/Terractiva/racines-de-resilience/actions)

## Liens

Un lien interne doit toujours utiliser seulement l'attribut `href` et faire référence aux pages définies dans `src/constants/pages` (bien penser à l'importer dans la balise `script`), par exemple :

```html
<script>
	import { homePage } from '$lib/constants/pages';
</script>

<a href="{homePage.path}" class="button">Revenir à l'accueil</a>
```

Un lien externe doit, en plus de `href`, doit utiliser l'attribut `rel` comme tel :

```html
<a href="https://tseignette.github.io/" rel="external" target="_blank">Thomas Seignette</a>
```
