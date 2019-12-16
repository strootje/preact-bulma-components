import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Level } from '../../../lib/Layout/Level';

describe('<Level.Right />', () => {
	use(JsxPlugin);

	it('Should render with `.level-right` when no props are set', () => {
		expect(
			<Level.Right />
		).to.equal(
			<div class='level-right'></div>
		);
	});
});
