import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Media } from '../../../lib/Layout/Media';

describe('<Media.Content />', () => {
	use(JsxPlugin);

	it('Should render with `.media-content` when no props are set', () => {
		expect(
			<Media.Content />
		).to.equal(
			<div class="media-content"></div>
		);
	});
});
