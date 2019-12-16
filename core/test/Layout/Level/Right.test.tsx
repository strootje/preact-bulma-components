import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { LevelRight } from '../../../lib/Layout/Level/Right';

describe('<Level.Right />', () => {
	use(JsxPlugin);

	it('Should render with `.level-right` when no props are set', () => {
		expect(
			<LevelRight />
		).to.equal(
			<div class='level-right'></div>
		);
	});
});
