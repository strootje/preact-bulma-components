import { expect, use } from 'chai';
import { h } from 'preact';
import { NavbarItem } from '../../../src/Components/Navbar/Item';

describe('The <NavbarItem> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.navbar-item`', () => {
		expect(
			<NavbarItem />
		).to.eql(
			<div class='navbar-item'></div>
		);
	});

	it('should render to a <div> with a child and classname `.navbar-item`', () => {
		expect(
			<NavbarItem>
				<p>I am a paragraph</p>
			</NavbarItem>
		).to.eql(
			<div class='navbar-item'>
				<p>I am a paragraph</p>
			</div>
		);
	});

	it('should render to a <div> with it\'s children and classname `.navbar-item`', () => {
		expect(
			<NavbarItem>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</NavbarItem>
		).to.eql(
			<div class='navbar-item'>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</div>
		);
	});

});
