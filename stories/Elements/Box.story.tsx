import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import ModifierKnobs from '../ModifierKnobs';
import Box from './../../src/Elements/Box';

const stories = storiesOf('Elements/Box', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Box {...ModifierKnobs()}>{text('Content', 'Hello, World!')}</Box>
));
