import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Tabs from '../../src/Components/Tabs';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Components/Tabs', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Tabs {...ModifierKnobs()}>
		<Tabs.Tab>Tab 1</Tabs.Tab>
		<Tabs.Tab>Tab 2</Tabs.Tab>
	</Tabs>
));
