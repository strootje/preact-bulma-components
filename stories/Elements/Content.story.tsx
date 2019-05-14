import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import { Content } from '../../src/Elements/Content';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Elements/Content', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Content {...ModifierKnobs()}>{text('Content', 'Hello, World!')}</Content>
));

stories.add('With html', () => (
	<Content {...ModifierKnobs()}>
		<p class='title is-5'>I am a Title</p>
		<p class='subtitle is-7'>and a subtitle</p>
	</Content>
));
