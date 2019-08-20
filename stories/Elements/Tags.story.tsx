import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import { Tags } from '../../src/Elements/Tags';
import ModifierKnobs, { ColorsModifier } from '../ModifierKnobs';

const stories = storiesOf('Elements/Tags', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Tags {...ModifierKnobs()}>
		<Tags.Tag color={ColorsModifier('Color Tag 1')}>Hello</Tags.Tag>
		<Tags.Tag color={ColorsModifier('Color Tag 2')}>World</Tags.Tag>
	</Tags>
));

stories.add('As Addon', () => (
	<Tags {...ModifierKnobs()} addons>
		<Tags.Tag color={ColorsModifier('Color Tag 1', 'warning')}>Hello</Tags.Tag>
		<Tags.Tag color={ColorsModifier('Color Tag 2', 'light')}>World</Tags.Tag>
	</Tags>
));
