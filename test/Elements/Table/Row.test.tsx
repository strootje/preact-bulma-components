import { expect, use } from 'chai';
import { h } from 'preact';
import { TableRow } from '../../../src/Elements/Table/Row';

describe('The <TableRow> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <tr> without a classname', () => {
		expect(
			<TableRow />
		).to.eql(
			<tr></tr>
		);
	});

});
