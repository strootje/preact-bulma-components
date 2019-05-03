import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Container from '../../src/Layout/Container';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Layout/Container', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Container {...ModifierKnobs()}>
		{text('Content', 'Hello, World!')}
	</Container>
));
