import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Checkbox from '../../src/Form/Checkbox';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Form/Checkbox', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Checkbox {...ModifierKnobs()}>testing</Checkbox>
));
