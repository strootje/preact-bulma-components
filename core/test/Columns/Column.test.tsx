import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Column } from '../../lib/Columns/Column';

describe('<Column />', () => {
	use(JsxPlugin);

	it('Should render with `.column` when no props are set', () => {
		expect(
			<Column />
		).to.equal(
			<div class='column'></div>
		);
	});
});
