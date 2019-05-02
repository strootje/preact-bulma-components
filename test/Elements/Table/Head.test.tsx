import { expect, use } from 'chai';
import { h } from 'preact';
import TableHead from '../../../src/Elements/Table/Head';

describe('The <TableHead> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <thead> without a classname', () => {
		expect(
			<TableHead />
		).to.eql(
			<thead></thead>
		);
	});

});
