import { expect, use } from 'chai';
import { h } from 'preact';
import { Hero } from '../../../src/Layout/Hero';

describe('The <Hero> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.hero`', () => {
		expect(
			<Hero />
		).to.eql(
			<div class='hero'></div>
		);
	});

	it('should render a complete <Hero />', () => {
		expect(
			<Hero>
				<Hero.Header>
					Header
				</Hero.Header>

				<Hero.Body>
					Body
				</Hero.Body>

				<Hero.Footer>
					Footer
				</Hero.Footer>
			</Hero>
		).to.eql(
			<div class='hero'>
				<div class='hero-head'>
					Header
				</div>

				<div class='hero-body'>
					Body
				</div>

				<div class='hero-foot'>
					Footer
				</div>
			</div>
		);
	});

});
