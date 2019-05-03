import '@fortawesome/fontawesome-free/css/all.min.css';
import { configure } from '@storybook/preact';
import 'bulma/css/bulma.min.css';
import './reset.css';

configure(() => {
	const req = require.context('./../stories', true, /\.story\.tsx?$/);
	req.keys().forEach((file) => req(file));
}, module);
