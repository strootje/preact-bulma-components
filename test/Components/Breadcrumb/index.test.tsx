import { expect, use } from 'chai';
import { h } from 'preact';
import { Breadcrumb } from '../../../src/Components/Breadcrumb';

describe('The <Breadcrumb> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <nav> with classname `.breadcrumb`', () => {
		expect(
			<Breadcrumb />
		).to.eql(
			<nav class='breadcrumb' aria-label='breadcrumbs'>
				<ul />
			</nav>
		);
	});

	it('should render to a <nav> with classname `.breadcrumb .is-centered` when `align` is set to centered', () => {
		expect(
			<Breadcrumb align='centered' />
		).to.eql(
			<nav class='breadcrumb is-centered' aria-label='breadcrumbs'>
				<ul />
			</nav>
		);
	});

	it('should render to a <nav> with classname `.breadcrumb .has-dot-separator` when `separator` is set to dot', () => {
		expect(
			<Breadcrumb separator='dot' />
		).to.eql(
			<nav class='breadcrumb has-dot-separator' aria-label='breadcrumbs'>
				<ul />
			</nav>
		);
	});

	it('should render to a <nav> with classname `.breadcrumb .is-small` when `size` is set to small', () => {
		expect(
			<Breadcrumb size='small' />
		).to.eql(
			<nav class='breadcrumb is-small' aria-label='breadcrumbs'>
				<ul />
			</nav>
		);
	});

	it('should render a complete breadcrumb', () => {
		expect(
			<Breadcrumb>
				<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
				<Breadcrumb.Item href='/blog'>Blog</Breadcrumb.Item>
				<Breadcrumb.Item href='/blog/hello-world' active>Hello World</Breadcrumb.Item>
			</Breadcrumb>
		).to.eql(
			<nav class='breadcrumb' aria-label='breadcrumbs'>
				<ul>
					<li><a href='/'>Home</a></li>
					<li><a href='/blog'>Blog</a></li>
					<li class='is-active'><a href='/blog/hello-world'>Hello World</a></li>
				</ul>
			</nav>
		);
	});

});
