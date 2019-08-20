import { expect, use } from 'chai';
import { h } from 'preact';
import { NavbarStart } from '../../../src/Components/Navbar/Start';

describe('The <NavbarStart> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.navbar-start`', () => {
		expect(
			<NavbarStart />
		).to.eql(
			<div class='navbar-start'></div>
		);
	});

	it('should render to a <div> with a child and classname `.navbar-start`', () => {
		expect(
			<NavbarStart>
				<p>I am a paragraph</p>
			</NavbarStart>
		).to.eql(
			<div class='navbar-start'>
				<p>I am a paragraph</p>
			</div>
		);
	});

	it('should render to a <div> with it\'s children and classname `.navbar-start`', () => {
		expect(
			<NavbarStart>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</NavbarStart>
		).to.eql(
			<div class='navbar-start'>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</div>
		);
	});

});
