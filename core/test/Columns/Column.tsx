import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Column } from '../../lib/Columns/Column';

describe('<Column />', () => {
	use(JsxPlugin);

	it('should render', () => {
		expect(
			<Column title='testing' />
		).to.equal(
			<div class='column'></div>
		);
	});
});
