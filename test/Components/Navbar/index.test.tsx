import { expect, use } from 'chai';
import { h } from 'preact';
import { Navbar } from '../../../src/Components/Navbar';

describe('The <Navbar> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <nav> with classname `.navbar`', () => {
		expect(
			<Navbar />
		).to.eql(
			<nav class='navbar' role='navigation' aria-label='main navigation'></nav>
		);
	});

	it('should render a complete navbar', () => {
		expect(
			<Navbar>
				<Navbar.Brand>
					<Navbar.Item href='https://github.com/strootje/preact-bulma-components'>
						<img />
					</Navbar.Item>

					<Navbar.Burger />
				</Navbar.Brand>

				<Navbar.Menu>
					<Navbar.Start>
						<Navbar.Dropdown label='posts'>
							<Navbar.Item href='~/posts/hello-world'>
								Hello World!
							</Navbar.Item>
						</Navbar.Dropdown>
					</Navbar.Start>

					<Navbar.End>
					</Navbar.End>
				</Navbar.Menu>
			</Navbar>
		).to.eql(
			<nav class='navbar' role='navigation' aria-label='main navigation'>
				<div class='navbar-brand'>
					<a class='navbar-item' href='https://github.com/strootje/preact-bulma-components'>
						<img />
					</a>

					<a class='navbar-burger' role='button' aria-label='menu' aria-expanded='false'>
						<span aria-hidden></span>
						<span aria-hidden></span>
						<span aria-hidden></span>
					</a>
				</div>

				<div class='navbar-menu'>
					<div class='navbar-start'>
						<div class='navbar-item has-dropdown is-hoverable'>
							<a class='navbar-link'>
								posts
							</a>

							<div class='navbar-dropdown'>
								<a class='navbar-item' href='~/posts/hello-world'>
									Hello World!
								</a>
							</div>
						</div>
					</div>

					<div class='navbar-end'>
					</div>
				</div>
			</nav>
		);
	});

});
