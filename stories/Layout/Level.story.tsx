import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import { Level } from '../../src/Layout/Level';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Layout/Level', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Level {...ModifierKnobs()}>
		<Level.Left>
			<Level.Item>{text('level1', 'Level 1')}</Level.Item>
		</Level.Left>

		<Level.Right>
			<Level.Item>{text('level2', 'Level 2')}</Level.Item>
		</Level.Right>
	</Level>
));
