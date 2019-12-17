import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Hero } from '../../../lib/Layout/Hero';

describe('<Hero.Head />', () => {
	use(JsxPlugin);

	it('Should render with `.hero-head` when no props are set', () => {
		expect(
			<Hero.Head />
		).to.equal(
			<div class="hero-head"></div>
		);
	});
});
