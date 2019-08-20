import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import { Modal } from '../../src/Components/Modal';
import { Notification } from '../../src/Elements/Notification';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Components/Modal', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Modal {...ModifierKnobs()} active>
		<Notification>asdads</Notification>
	</Modal>
));
