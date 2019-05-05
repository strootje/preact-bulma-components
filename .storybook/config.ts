import '@fortawesome/fontawesome-free/css/all.min.css';
import { addParameters, configure } from '@storybook/preact';
import 'bulma/css/bulma.min.css';
import './reset.css';

addParameters({
	options: {
		enableShortcuts: true,
		panelPosition: 'bottom',
		showPanel: true,
		sidebarAnimations: false
	}
});

configure(() => {
	const req = require.context('./../stories', true, /\.story\.tsx?$/);
	req.keys().forEach((file) => req(file));
}, module);
