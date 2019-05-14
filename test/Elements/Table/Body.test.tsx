import { expect, use } from 'chai';
import { h } from 'preact';
import { TableBody } from '../../../src/Elements/Table/Body';

describe('The <TableBody> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <tbody> without a classname', () => {
		expect(
			<TableBody />
		).to.eql(
			<tbody></tbody>
		);
	});

});
