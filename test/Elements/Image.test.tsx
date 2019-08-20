import { expect, use } from 'chai';
import { h } from 'preact';
import { Image } from '../../src/Elements/Image';

describe('The <Image> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <figure> with classname `.image` and an img', () => {
		expect(
			<Image src='test' />
		).to.eql(
			<figure class='image'>
				<img src='test' role='presentation' />
			</figure>
		);
	});

	it('should render to a <figure> with classname `.image` and an img with classname `.rounded`', () => {
		expect(
			<Image src='test' rounded />
		).to.eql(
			<figure class='image'>
				<img class='rounded' src='test' role='presentation' />
			</figure>
		);
	});

	it('should render to a <figure> with classname `.image` and an img and caption', () => {
		expect(
			<Image src='test' caption='hello world' />
		).to.eql(
			<figure class='image'>
				<img src='test' alt='hello world' />
				<figcaption>hello world</figcaption>
			</figure>
		);
	});

});
