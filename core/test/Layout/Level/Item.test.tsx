import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Level } from '../../../lib/Layout/Level';

describe('<Level.Item />', () => {
	use(JsxPlugin);

	it('Should render with `.level-item` when no props are set', () => {
		expect(
			<Level.Item />
		).to.equal(
			<div class='level-item'></div>
		);
	});

	it('Should render with `.level-item .has-text-centered` when prop `centered` is set to `true`', () => {
		expect(
			<Level.Item centered />
		).to.equal(
			<div class='level-item has-text-centered'></div>
		);
	});
});
