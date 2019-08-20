import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import { Tile } from '../../src/Layout/Tile';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Layout/Tile', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Tile {...ModifierKnobs()}>
		{text('Content', 'Hello, World!')}
	</Tile>
));
