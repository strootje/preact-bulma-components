import { expect } from 'chai';
import { describe } from 'mocha';
import { AttrBuilder } from '../lib/AttrBuilder';

describe('AttrBuilder', () => {
	it('Should add `nothing` when prop `display` is set to `nothing`', () => {
		// Arrange
		const props = {
			display: ''
		};

		// Act
		const classes = AttrBuilder(props, 'display');

		// Assert
		expect(classes).to.be.empty;
	});

	it('Should add `.is-block` when prop `display` is set to `block`', () => {
		// Arrange
		const props = {
			display: 'block'
		};

		// Act
		const classes = AttrBuilder(props, 'display');

		// Assert
		expect(classes).to.contain({
			['is-block']: true
		});
	});

	it('Should add `.has-block` when prop `display` is set to `block`', () => {
		// Arrange
		const props = {
			display: 'block'
		};

		// Act
		const classes = AttrBuilder(props, 'display', 'has');

		// Assert
		expect(classes).to.contain({
			['has-block']: true
		});
	});

	it('Should add `.is-selectable` when prop `selectable` is set to `true`', () => {
		// Arrange
		const props = {
			selectable: true
		};

		// Act
		const classes = AttrBuilder(props, 'selectable');

		// Assert
		expect(classes).to.contain({
			['is-selectable']: true
		});
	});

	it('Should add `.is-block .is-flex-mobile` when prop `display.fallback` is set to `block` and `display.mobile` is set to `flex`', () => {
		// Arrange
		const props = {
			display: {
				fallback: 'block',
				mobile: 'flex'
			}
		};

		// Act
		const classes = AttrBuilder(props, 'display');

		// Assert
		expect(classes).to.contain({
			['is-block']: true,
			['is-flex-mobile']: true
		});
	});

	it('Should add `display=block` when prop `display` is set to `block`', () => {
		// Arrange
		const props = {
			display: 'block'
		};

		// Act
		const classes = AttrBuilder(props, 'display', false);

		// Assert
		expect(classes).to.contain({
			['display']: 'block'
		});
	});
});
