import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Footer } from '../../../lib/Layout/Footer';

describe('<Footer />', () => {
	use(JsxPlugin);

	it('Should render with `.footer` when no props are set', () => {
		expect(
			<Footer />
		).to.equal(
			<footer class="footer"></footer>
		);
	});
});
