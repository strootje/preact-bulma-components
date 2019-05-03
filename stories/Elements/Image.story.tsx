import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Image from '../../src/Elements/Image';
import ModifierKnobs from '../ModifierKnobs';

const imageUri = 'http://placekitten.com/g/200/300';

const stories = storiesOf('Elements/Image', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Image {...ModifierKnobs()} src={text('Image Uri', imageUri)} />
));

stories.add('With Caption', () => (
	<Image {...ModifierKnobs()} src={text('Image Uri', imageUri)} caption={text('Caption', 'Can I Haz Cheezburger?')} />
));
