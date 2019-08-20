import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import { Delete } from '../../src/Elements/Delete';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Elements/Delete', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Delete {...ModifierKnobs()} onClick={action('clicked')} />
));
