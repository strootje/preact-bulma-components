import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Hero } from '../../../lib/Layout/Hero';

describe('<Hero />', () => {
	use(JsxPlugin);

	it('Should render with `.hero` when no props are set', () => {
		expect(
			<Hero />
		).to.equal(
			<div class="hero"></div>
		);
	});

	it('Should render with `.hero .is-bold` when prop `bold` is set to `true`', () => {
		expect(
			<Hero bold />
		).to.equal(
			<div class="hero is-bold"></div>
		);
	});

	it('Should render with `.hero .is-medium` when prop `hero-size` is set to `medium`', () => {
		expect(
			<Hero hero-size="medium" />
		).to.equal(
			<div class="hero is-medium"></div>
		);
	});

	it('Should render with `.hero .is-fullheight-with-navbar` when prop `hero-size` is set to `fullheight-with-navbar`', () => {
		expect(
			<Hero hero-size="fullheight-with-navbar" />
		).to.equal(
			<div class="hero is-fullheight-with-navbar"></div>
		);
	});
});
