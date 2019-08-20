import { expect, use } from 'chai';
import { h } from 'preact';
import { Card } from '../../../src/Components/Card';

describe('The <Card> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.card`', () => {
		expect(
			<Card />
		).to.eql(
			<div class='card' />
		);
	});

	it('should render a complete card component', () => {
		expect(
			<Card>
				<Card.Header>
					<Card.HeaderIcon>fas fa-lock</Card.HeaderIcon>
					<Card.HeaderTitle>test</Card.HeaderTitle>
				</Card.Header>

				<Card.Content>
					<p>test</p>
				</Card.Content>

				<Card.Footer>
					<Card.FooterItem>
						<span>this is one</span>
					</Card.FooterItem>

					<Card.FooterItem>
						<span>this is two</span>
					</Card.FooterItem>
				</Card.Footer>
			</Card>
		).to.eql(
			<div class='card'>
				<header class='card-header'>
					<a class='card-header-icon'>
						<span class='icon'><i class='fas fa-lock'></i></span>
					</a>
					<p class='card-header-title'>test</p>
				</header>

				<div class='card-content'>
					<p>test</p>
				</div>

				<footer class='card-footer'>
					<p class='card-footer-item'>
						<span>this is one</span>
					</p>

					<p class='card-footer-item'>
						<span>this is two</span>
					</p>
				</footer>
			</div>
		);
	});

});
