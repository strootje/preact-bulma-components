import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Hero } from '../../../lib/Layout/Hero';

describe('<Hero.Body />', () => {
	use(JsxPlugin);

	it('Should render with `.hero-body` when no props are set', () => {
		expect(
			<Hero.Body />
		).to.equal(
			<div class="hero-body"></div>
		);
	});
});
