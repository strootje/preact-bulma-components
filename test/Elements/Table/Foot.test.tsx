import { expect, use } from 'chai';
import { h } from 'preact';
import TableFoot from '../../../src/Elements/Table/Foot';

describe('The <TableFoot> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <tfoot> without a classname', () => {
		expect(
			<TableFoot />
		).to.eql(
			<tfoot></tfoot>
		);
	});

});
