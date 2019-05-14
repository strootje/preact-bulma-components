import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Control from '../../src/Form/Control';
import Field from '../../src/Form/Field';
import Label from '../../src/Form/Label';
import TextInput from '../../src/Form/TextInput';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Form/TextInput', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Field>
		<Label>testing</Label>
		<Control>
			<TextInput {...ModifierKnobs()} />
		</Control>
	</Field>
));
