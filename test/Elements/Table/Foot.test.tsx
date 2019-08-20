import { expect, use } from 'chai';
import { h } from 'preact';
import { TableFooter } from '../../../src/Elements/Table/Footer';

describe('The <TableFooter> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <tfoot> without a classname', () => {
		expect(
			<TableFooter />
		).to.eql(
			<tfoot></tfoot>
		);
	});

});
