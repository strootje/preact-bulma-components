import { expect, use } from 'chai';
import { h } from 'preact';
import LevelItem from '../../../src/Layout/Level/Item';

describe('The <Level> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.level-item`', () => {
		expect(
			<LevelItem />
		).to.eql(
			<div class='level-item'></div>
		);
	});

});
