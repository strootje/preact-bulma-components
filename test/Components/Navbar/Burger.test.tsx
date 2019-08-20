import { expect, use } from 'chai';
import { h } from 'preact';
import { NavbarBurger } from '../../../src/Components/Navbar/Burger';

describe('The <NavbarBurger> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <a> with classname `.navbar-burger`', () => {
		expect(
			<NavbarBurger />
		).to.eql(
			<a class='navbar-burger' role='button' aria-label='menu' aria-expanded='false'>
				<span aria-hidden></span>
				<span aria-hidden></span>
				<span aria-hidden></span>
			</a>
		);
	});

	it('should render to a <a> with classname `.navbar-burger` and `.is-active` when the active attribute is set to `true`', () => {
		expect(
			<NavbarBurger active />
		).to.eql(
			<a class='navbar-burger is-active' role='button' aria-label='menu' aria-expanded='false'>
				<span aria-hidden></span>
				<span aria-hidden></span>
				<span aria-hidden></span>
			</a>
		);
	});

});
