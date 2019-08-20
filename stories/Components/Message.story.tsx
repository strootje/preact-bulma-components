import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import { Message } from '../../src/Components/Message';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Components/Message', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Message {...ModifierKnobs()} header='hello world'>
		sdlkfjlsdfkl
	</Message>
));
