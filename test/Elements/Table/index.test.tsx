import { expect, use } from 'chai';
import { h } from 'preact';
import Table from '../../../src/Elements/Table';

describe('The <Table> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <table> with classname `.table`', () => {
		expect(
			<Table />
		).to.eql(
			<table class='table'></table>
		);
	});

	it('should render a full table', () => {
		expect(
			<Table>
				<Table.Head>
					<Table.Row>
						<Table.Column heading>col 1</Table.Column>
						<Table.Column heading>col 2</Table.Column>
						<Table.Column heading>col 3</Table.Column>
					</Table.Row>
				</Table.Head>

				<Table.Foot>
					<Table.Row>
						<Table.Column>foot 1</Table.Column>
						<Table.Column>foot 2</Table.Column>
						<Table.Column>foot 3</Table.Column>
					</Table.Row>
				</Table.Foot>

				<Table.Body>
					{[1, 2, 3].map((i) => (<Table.Row>
						<Table.Column>Row {i} - Col 1</Table.Column>
						<Table.Column>Row {i} - Col 2</Table.Column>
						<Table.Column>Row {i} - Col 3</Table.Column>
					</Table.Row>))}
				</Table.Body>
			</Table>
		).to.eql(
			<table class='table'>
				<thead>
					<tr>
						<th>col 1</th>
						<th>col 2</th>
						<th>col 3</th>
					</tr>
				</thead>

				<tfoot>
					<tr>
						<td>foot 1</td>
						<td>foot 2</td>
						<td>foot 3</td>
					</tr>
				</tfoot>

				<tbody>
					<tr>
						<td>Row 1 - Col 1</td>
						<td>Row 1 - Col 2</td>
						<td>Row 1 - Col 3</td>
					</tr>
					<tr>
						<td>Row 2 - Col 1</td>
						<td>Row 2 - Col 2</td>
						<td>Row 2 - Col 3</td>
					</tr>
					<tr>
						<td>Row 3 - Col 1</td>
						<td>Row 3 - Col 2</td>
						<td>Row 3 - Col 3</td>
					</tr>
				</tbody>
			</table>
		);
	});

});
