import { expect, use } from 'chai';
import { h } from 'preact';
import { TableHeader } from '../../../src/Elements/Table/Header';

describe('The <TableHeader> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <thead> without a classname', () => {
		expect(
			<TableHeader />
		).to.eql(
			<thead></thead>
		);
	});

});
