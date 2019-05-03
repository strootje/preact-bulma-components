import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Table from '../../src/Elements/Table';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Elements/Table', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Table {...ModifierKnobs()}>
		<Table.Head>
			<Table.Row>
				<Table.Column heading>Column 1</Table.Column>
				<Table.Column heading>Column 2</Table.Column>
				<Table.Column heading>Column 3</Table.Column>
			</Table.Row>
		</Table.Head>

		<Table.Body>
			<Table.Row>
				<Table.Column>Column 1</Table.Column>
				<Table.Column>Column 2</Table.Column>
				<Table.Column>Column 3</Table.Column>
			</Table.Row>
			<Table.Row>
				<Table.Column>Column 1</Table.Column>
				<Table.Column>Column 2</Table.Column>
				<Table.Column>Column 3</Table.Column>
			</Table.Row>
			<Table.Row>
				<Table.Column>Column 1</Table.Column>
				<Table.Column>Column 2</Table.Column>
				<Table.Column>Column 3</Table.Column>
			</Table.Row>
		</Table.Body>
	</Table>
));
