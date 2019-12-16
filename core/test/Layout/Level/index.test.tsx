import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Level } from '../../../lib/Layout/Level';

describe('<Level />', () => {
	use(JsxPlugin);

	it('Should render with `.level` when no props are set', () => {
		expect(
			<Level />
		).to.equal(
			<div class='level'></div>
		);
	});

	it('Should render with `.level .is-mobile` when prop `mobile` is set to `true`', () => {
		expect(
			<Level mobile />
		).to.equal(
			<div class='level is-mobile'></div>
		);
	});
});
