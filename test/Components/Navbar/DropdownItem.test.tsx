import { expect, use } from 'chai';
import { h } from 'preact';
import NavbarDropdownItem from '../../../src/Components/Navbar/DropdownItem';

describe('The <NavbarDropdownItem> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to an <a> with classname `.navbar-item has-dropdown is-hoverable`', () => {
		expect(
			<NavbarDropdownItem label='posts' />
		).to.eql(
			<div class='navbar-item has-dropdown is-hoverable'>
				<a class='navbar-link'>
					posts
				</a>

				<div class='navbar-dropdown'>
				</div>
			</div>
		);
	});

	it('should render to an <a> with a child and classname `.navbar-item has-dropdown is-hoverable`', () => {
		expect(
			<NavbarDropdownItem label='posts'>
				<p>I am a paragraph</p>
			</NavbarDropdownItem>
		).to.eql(
			<div class='navbar-item has-dropdown is-hoverable'>
				<a class='navbar-link'>
					posts
				</a>

				<div class='navbar-dropdown'>
					<p>I am a paragraph</p>
				</div>
			</div>
		);
	});

	it('should render to an <a> with it\'s children and classname `.navbar-item has-dropdown is-hoverable`', () => {
		expect(
			<NavbarDropdownItem label='posts'>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</NavbarDropdownItem>
		).to.eql(
			<div class='navbar-item has-dropdown is-hoverable'>
				<a class='navbar-link'>
					posts
				</a>

				<div class='navbar-dropdown'>
					<p>I am a paragraph</p>
					<p>I am also a paragraph</p>
				</div>
			</div>
		);
	});

	it('should render to an <a> with classname `.navbar-item has-dropdown is-hoverable` and a custom element used for label', () => {
		expect(
			<NavbarDropdownItem label={<p>testing</p>} />
		).to.eql(
			<div class='navbar-item has-dropdown is-hoverable'>
				<a class='navbar-link'>
					<p>testing</p>
				</a>

				<div class='navbar-dropdown'>
				</div>
			</div>
		);
	});

	it('should render to an <a> with classname `.navbar-item has-dropdown is-active` when the active attribute is set to `true`', () => {
		expect(
			<NavbarDropdownItem label='posts' active />
		).to.eql(
			<div class='navbar-item has-dropdown is-active'>
				<a class='navbar-link'>
					posts
				</a>

				<div class='navbar-dropdown'>
				</div>
			</div>
		);
	});

	it('should render to an <a> with classname `.navbar-item has-dropdown is-active` when the active and hoverable attribute are set to `true`', () => {
		expect(
			<NavbarDropdownItem label='posts' active hoverable />
		).to.eql(
			<div class='navbar-item has-dropdown is-hoverable is-active'>
				<a class='navbar-link'>
					posts
				</a>

				<div class='navbar-dropdown'>
				</div>
			</div>
		);
	});

});
