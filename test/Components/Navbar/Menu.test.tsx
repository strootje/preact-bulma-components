import { expect, use } from 'chai';
import { h } from 'preact';
import { NavbarMenu } from '../../../src/Components/Navbar/Menu';

describe('The <NavbarMenu> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.navbar-menu`', () => {
		expect(
			<NavbarMenu />
		).to.eql(
			<div class='navbar-menu'></div>
		);
	});

	it('should render to a <div> with a child and classname `.navbar-menu', () => {
		expect(
			<NavbarMenu>
				<p>I am a paragraph</p>
			</NavbarMenu>
		).to.eql(
			<div class='navbar-menu'>
				<p>I am a paragraph</p>
			</div>
		);
	});

	it('should render to a <div> with it\'s children and classname `.navbar-menu`', () => {
		expect(
			<NavbarMenu>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</NavbarMenu>
		).to.eql(
			<div class='navbar-menu'>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</div>
		);
	});

	it('should render to a <div> with classname `.navbar-menu` and `.is-active` when the active attribute is set to `true`', () => {
		expect(
			<NavbarMenu active />
		).to.eql(
			<div class='navbar-menu is-active'></div>
		);
	});

});
