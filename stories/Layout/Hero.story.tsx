import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Hero from '../../src/Layout/Hero';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Layout/Hero', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Hero {...ModifierKnobs()}>
		<Hero.Body>
			{text('Content', 'Hello, World!')}
		</Hero.Body>
	</Hero>
));
