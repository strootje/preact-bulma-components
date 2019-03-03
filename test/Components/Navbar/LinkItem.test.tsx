import { expect, use } from 'chai';
import { h } from 'preact';
import NavbarLinkItem from '../../../src/Components/Navbar/LinkItem';

describe('The <NavbarLinkItem> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to an <a> with classname `.navbar-item`', () => {
		expect(
			<NavbarLinkItem />
		).to.eql(
			<a class='navbar-item'></a>
		);
	});

	it('should render to an <a> with a child and classname `.navbar-item`', () => {
		expect(
			<NavbarLinkItem>
				<p>I am a paragraph</p>
			</NavbarLinkItem>
		).to.eql(
			<a class='navbar-item'>
				<p>I am a paragraph</p>
			</a>
		);
	});

	it('should render to an <a> with it\'s children and classname `.navbar-item`', () => {
		expect(
			<NavbarLinkItem>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</NavbarLinkItem>
		).to.eql(
			<a class='navbar-item'>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</a>
		);
	});

	it('should render to an <a> with classname `.navbar-item` and the href attribute set to `http://github.com`', () => {
		expect(
			<NavbarLinkItem href='https://github.com' />
		).to.eql(
			<a class='navbar-item' href='https://github.com'></a>
		);
	});

});
