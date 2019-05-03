import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Icon from '../../src/Elements/Icon';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Elements/Icon', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Icon {...ModifierKnobs()}>fas fa-lock</Icon>
));
