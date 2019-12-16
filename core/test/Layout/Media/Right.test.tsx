import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Media } from '../../../lib/Layout/Media';

describe('<Media.Right />', () => {
	use(JsxPlugin);

	it('Should render with `.media-right` when no props are set', () => {
		expect(
			<Media.Right />
		).to.equal(
			<div class="media-right"></div>
		);
	});
});
