import { expect, use } from 'chai';
import { h } from 'preact';
import { Tile } from '../../src/Layout/Tile';

describe('The <Tile> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.tile`', () => {
		expect(
			<Tile />
		).to.eql(
			<div class='tile'></div>
		);
	});

	it('should render to a <div> with classname `.tile`', () => {
		expect(
			<Tile type='ancestor'>
				<Tile type='parent'>
					<Tile type='child' class='box'>
						Content
					</Tile>
				</Tile>
			</Tile>
		).to.eql(
			<div class='tile is-ancestor'>
				<div class='tile is-parent'>
					<div class='tile is-child box'>
						Content
					</div>
				</div>
			</div>
		);
	});

});
