import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Menu from '../../src/Components/Menu';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Components/Menu', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Menu {...ModifierKnobs()}>
		<Menu.Label>test</Menu.Label>
		<Menu.List>
			<Menu.ListItem label='xxx' />
			<Menu.ListItem label='000' active>
				<Menu.Label>asdasd</Menu.Label>
				<Menu.List>
					<Menu.ListItem label='asdasd' />
				</Menu.List>
			</Menu.ListItem>
		</Menu.List>
	</Menu>
));
