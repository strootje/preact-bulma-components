import { expect, use } from 'chai';
import { h } from 'preact';
import NavbarEnd from '../../../src/Components/Navbar/End';

describe('The <NavbarEnd> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.navbar-end`', () => {
		expect(
			<NavbarEnd />
		).to.eql(
			<div class='navbar-end'></div>
		);
	});

	it('should render to a <div> with a child and classname `.navbar-end`', () => {
		expect(
			<NavbarEnd>
				<p>I am a paragraph</p>
			</NavbarEnd>
		).to.eql(
			<div class='navbar-end'>
				<p>I am a paragraph</p>
			</div>
		);
	});

	it('should render to a <div> with it\'s children and classname `.navbar-end`', () => {
		expect(
			<NavbarEnd>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</NavbarEnd>
		).to.eql(
			<div class='navbar-end'>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</div>
		);
	});

});
