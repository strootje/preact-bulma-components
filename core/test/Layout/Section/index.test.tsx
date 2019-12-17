import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Section } from '../../../lib/Layout/Section';

describe('<Section />', () => {
	use(JsxPlugin);

	it('Should render with `.section` when no props are set', () => {
		expect(
			<Section />
		).to.equal(
			<section class="section"></section>
		);
	});
});
