import { expect, use } from 'chai';
import { h } from 'preact';
import { Footer } from '../../src/Layout/Footer';

describe('The <Footer> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <footer> with classname `.footer`', () => {
		expect(
			<Footer />
		).to.eql(
			<footer class='footer'></footer>
		);
	});

});
