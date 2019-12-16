import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Media } from '../../../lib/Layout/Media';

describe('<Media />', () => {
	use(JsxPlugin);

	it('Should render with `.media` when no props are set', () => {
		expect(
			<Media />
		).to.equal(
			<article class="media"></article>
		);
	});
});
