import { expect, use } from 'chai';
import { h } from 'preact';
import Container from '../../src/Layout/Container';

describe('The <Container> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.container`', () => {
		expect(
			<Container />
		).to.eql(
			<div class='container'></div>
		);
	});

	it('should render to a <div> with classname `.container` and `.is-fluid` when the fluid attribute is present', () => {
		expect(
			<Container fluid />
		).to.eql(
			<div class='container is-fluid'></div>
		);
	});

	it('should render to a <div> with classname `.container` and `.is-fullhd` when the fullhd attribute is present', () => {
		expect(
			<Container fullhd />
		).to.eql(
			<div class='container is-fullhd'></div>
		);
	});

	it('should render to a <div> with classname `.container` and `.is-widescreen` when the widescreen attribute is present', () => {
		expect(
			<Container widescreen />
		).to.eql(
			<div class='container is-widescreen'></div>
		);
	});

});
