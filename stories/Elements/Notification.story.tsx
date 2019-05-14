import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import { Notification } from '../../src/Elements/Notification';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Elements/Notification', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Notification {...ModifierKnobs()}>{text('Content', 'Hello, World!')}</Notification>
));
