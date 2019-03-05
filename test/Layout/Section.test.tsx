import { expect, use } from 'chai';
import { h } from 'preact';
import Section from '../../src/Layout/Section';

describe('The <Section> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <section> with classname `.section`', () => {
		expect(
			<Section />
		).to.eql(
			<section class='section'></section>
		);
	});

});
