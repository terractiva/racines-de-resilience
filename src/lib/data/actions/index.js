import energyActions from './1-energy';
import mobilityActions from './2-mobility';
import resilienceActions from './7-resilience';
import joyActions from './12-joy';
import inequalityActions from './18-inequality';
import climaticideActions from './22-climaticide';

const actions = [
	...energyActions,
	...mobilityActions,
	...resilienceActions,
	...joyActions,
	...inequalityActions,
	...climaticideActions
];

export default actions;
