import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Content from '../../src/Elements/Content';

storiesOf('Elements/Content', module)
.add('Simple', () => (
	<Content>Hello, World!</Content>
))
.add('With title', () => (
	<Content>
		<p class='title is-5'>I am a Title</p>
		<p class='subtitle is-7'>and a subtitle</p>
	</Content>
));
