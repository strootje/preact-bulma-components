import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Footer from '../../src/Layout/Footer';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Layout/Footer', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Footer {...ModifierKnobs()}>
		{text('Content', 'Hello, World!')}
	</Footer>
));
