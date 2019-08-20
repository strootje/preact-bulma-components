import { expect, use } from 'chai';
import { h } from 'preact';
import { TableColumn } from '../../../src/Elements/Table/Column';

describe('The <TableColumn> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <td> without a classname', () => {
		expect(
			<TableColumn />
		).to.eql(
			<td></td>
		);
	});

	it('should render to a <th> without a classname', () => {
		expect(
			<TableColumn heading />
		).to.eql(
			<th></th>
		);
	});

});
