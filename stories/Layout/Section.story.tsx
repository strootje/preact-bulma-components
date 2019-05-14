import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import { Section } from '../../src/Layout/Section';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Layout/Section', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Section {...ModifierKnobs()}>
		{text('Content', 'Hello, World!')}
	</Section>
));
