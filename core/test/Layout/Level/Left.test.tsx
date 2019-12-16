import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Level } from '../../../lib/Layout/Level';

describe('<Level.Left />', () => {
	use(JsxPlugin);

	it('Should render with `.level-left` when no props are set', () => {
		expect(
			<Level.Left />
		).to.equal(
			<div class='level-left'></div>
		);
	});
});
