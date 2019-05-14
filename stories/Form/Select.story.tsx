import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Control from '../../src/Form/Control';
import Field from '../../src/Form/Field';
import Label from '../../src/Form/Label';
import Select from '../../src/Form/Select';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Form/Select', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Field>
		<Label>testing</Label>
		<Control>
			<Select {...ModifierKnobs()}>
				<Select.Option>test 1</Select.Option>
				<Select.Option>test 2</Select.Option>
			</Select>
		</Control>
	</Field>
));
