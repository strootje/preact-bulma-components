import { expect, use } from 'chai';
import { h } from 'preact';
import Level from '../../../src/Layout/Level';

describe('The <Level> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.level`', () => {
		expect(
			<Level />
		).to.eql(
			<div class='level'></div>
		);
	});

	it('should render a complete level', () => {
		expect(
			<Level>
				<Level.Left>
					<Level.Item>
						Hello, LeftLevel!
					</Level.Item>
				</Level.Left>

				<Level.Right>
					<Level.Item>
						Hello, RightLevel!
					</Level.Item>
				</Level.Right>
			</Level>
		).to.eql(
			<div class='level'>
				<div class='level-left'>
					<div class='level-item'>
						Hello, LeftLevel!
					</div>
				</div>

				<div class='level-right'>
					<div class='level-item'>
						Hello, RightLevel!
					</div>
				</div>
			</div>
		);
	});

});
