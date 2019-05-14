import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import { Dropdown } from '../../src/Components/Dropdown';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Components/Dropdown', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Dropdown {...ModifierKnobs()} label='testing' active>
		<Dropdown.Item href='test'>test 1</Dropdown.Item>
		<Dropdown.Divider />
		<Dropdown.Item>test 2</Dropdown.Item>
	</Dropdown>
));
