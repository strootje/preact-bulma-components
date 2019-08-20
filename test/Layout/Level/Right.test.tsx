import { expect, use } from 'chai';
import { h } from 'preact';
import { LevelRight } from '../../../src/Layout/Level/Right';

describe('The <LevelRight> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.level-right`', () => {
		expect(
			<LevelRight />
		).to.eql(
			<div class='level-right'></div>
		);
	});

});
