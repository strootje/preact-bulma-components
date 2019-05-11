import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Panel from '../../src/Components/Panel';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Components/Panel', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Panel {...ModifierKnobs()}>
		<Panel.Header>Hello</Panel.Header>

		<Panel.Tabs>
			<Panel.Tab active>test 1</Panel.Tab>
			<Panel.Tab>test 2</Panel.Tab>
			<Panel.Tab>test 3</Panel.Tab>
		</Panel.Tabs>

		<Panel.Link active icon='fas fa-book'>github.io</Panel.Link>
		<Panel.Link active icon='fas fa-book'>issuehunt.io</Panel.Link>
		<Panel.Link active icon='fas fa-book'>codetriage.io</Panel.Link>
		<Panel.Checkbox>testing</Panel.Checkbox>
		<Panel.Block>
			<button class='button is-link is-fullwidth'>test</button>
		</Panel.Block>
	</Panel>
));
