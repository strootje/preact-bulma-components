import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Hero } from '../../../lib/Layout/Hero';

describe('<Hero.Foot />', () => {
	use(JsxPlugin);

	it('Should render with `.hero-foot` when no props are set', () => {
		expect(
			<Hero.Foot />
		).to.equal(
			<div class="hero-foot"></div>
		);
	});
});
