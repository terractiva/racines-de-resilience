// Les imports doivent terminer par `.js` sinon ça ne marche pas dans `svelte.config.js`

import energyActions from './1-energy.js';
import artActions from './10-art.js';
import imaginationActions from './11-imagination.js';
import uncertaintyActions from './12-uncertainty.js';
import livingActions from './13-living.js';
import conflictsActions from './14-conflicts.js';
import democracyActions from './15-democracy.js';
import demographyActions from './16-demography.js';
import commonsActions from './17-commons.js';
import inequalitiesActions from './18-inequalities.js';
import financeActions from './19-finance.js';
import mobilityActions from './2-mobility.js';
import justiceActions from './20-justice.js';
import publicActions from './21-public.js';
import climaticideActions from './22-climaticide.js';
import experimentationActions from './23-experimentation.js';
import ecosystemsActions from './24-ecosystems.js';
import housingActions from './3-housing.js';
import wasteActions from './4-waste.js';
import decarbonizeActions from './5-decarbonize.js';
import agricultureActions from './6-agriculture.js';
import resilienceActions from './7-resilience.js';
import complexityActions from './8-complexity.js';
import childrenActions from './9-children.js';

const actions = [
	...energyActions,
	...mobilityActions,
	...housingActions,
	...wasteActions,
	...decarbonizeActions,
	...agricultureActions,
	...resilienceActions,
	...complexityActions,
	...childrenActions,
	...artActions,
	...imaginationActions,
	...uncertaintyActions,
	...livingActions,
	...conflictsActions,
	...democracyActions,
	...demographyActions,
	...commonsActions,
	...inequalitiesActions,
	...financeActions,
	...justiceActions,
	...publicActions,
	...climaticideActions,
	...experimentationActions,
	...ecosystemsActions
];

export default actions;
