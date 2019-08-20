import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import { Media } from '../../src/Layout/Media';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Layout/Media', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Media {...ModifierKnobs()}>
		<Media.Left>
			{text('Media1', 'Media 1')}
		</Media.Left>

		<Media.Right>
			<Media.Content>{text('Media2', 'Media 2')}</Media.Content>
		</Media.Right>
	</Media>
));
