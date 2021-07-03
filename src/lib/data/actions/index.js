// Les imports doivent terminer par `.js` sinon ça ne marche pas dans `svelte.config.js`

import energyActions from './1-energy.js';
import mobilityActions from './2-mobility.js';
import resilienceActions from './7-resilience.js';
import joyActions from './12-joy.js';
import inequalityActions from './18-inequality.js';
import climaticideActions from './22-climaticide.js';

const actions = [
	...energyActions,
	...mobilityActions,
	...resilienceActions,
	...joyActions,
	...inequalityActions,
	...climaticideActions
];

export default actions;
