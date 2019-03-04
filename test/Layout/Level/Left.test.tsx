import { expect, use } from 'chai';
import { h } from 'preact';
import LevelLeft from '../../../src/Layout/Level/Left';

describe('The <LevelLeft> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.level-left`', () => {
		expect(
			<LevelLeft />
		).to.eql(
			<div class='level-left'></div>
		);
	});

});
