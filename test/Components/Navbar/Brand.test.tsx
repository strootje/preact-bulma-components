import { expect, use } from 'chai';
import { h } from 'preact';
import { NavbarBrand } from '../../../src/Components/Navbar/Brand';

describe('The <NavbarBrand> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.navbar-brand`', () => {
		expect(
			<NavbarBrand />
		).to.eql(
			<div class='navbar-brand'></div>
		);
	});

	it('should render to a <div> with a child and classname `.navbar-brand`', () => {
		expect(
			<NavbarBrand>
				<p>I am a paragraph</p>
			</NavbarBrand>
		).to.eql(
			<div class='navbar-brand'>
				<p>I am a paragraph</p>
			</div>
		);
	});

	it('should render to a <div> with it\'s children and classname `.navbar-brand`', () => {
		expect(
			<NavbarBrand>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</NavbarBrand>
		).to.eql(
			<div class='navbar-brand'>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</div>
		);
	});

});
