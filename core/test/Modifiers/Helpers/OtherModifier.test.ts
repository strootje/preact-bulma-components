import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddOtherModifierProps, OtherModifierProps } from "../../../lib/Modifiers/Helpers/OtherModifier";

describe('AddOtherModifierProps', () => {
	it('Should add `.is-overlay` when prop `overlay` is set to `true`', () => {
		// Arrange
		const props: OtherModifierProps = {
			overlay: true
		};

		// Act
		const classes = AddOtherModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-overlay']: true
		});
	});

	it('Should add `.is-clipped` when prop `clipped` is set to `true`', () => {
		// Arrange
		const props: OtherModifierProps = {
			clipped: true
		};

		// Act
		const classes = AddOtherModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-clipped']: true
		});
	});

	it('Should add `.is-radiusless` when prop `radiusless` is set to `true`', () => {
		// Arrange
		const props: OtherModifierProps = {
			radiusless: true
		};

		// Act
		const classes = AddOtherModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-radiusless']: true
		});
	});

	it('Should add `.is-shadowless` when prop `shadowless` is set to `true`', () => {
		// Arrange
		const props: OtherModifierProps = {
			shadowless: true
		};

		// Act
		const classes = AddOtherModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-shadowless']: true
		});
	});

	it('Should add `.is-unselectable` when prop `unselectable` is set to `true`', () => {
		// Arrange
		const props: OtherModifierProps = {
			unselectable: true
		};

		// Act
		const classes = AddOtherModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-unselectable']: true
		});
	});

	it('Should add `.is-invisible` when prop `invisible` is set to `true`', () => {
		// Arrange
		const props: OtherModifierProps = {
			invisible: true
		};

		// Act
		const classes = AddOtherModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-invisible']: true
		});
	});

	it('Should add `.is-hidden` when prop `hidden` is set to `true`', () => {
		// Arrange
		const props: OtherModifierProps = {
			hidden: true
		};

		// Act
		const classes = AddOtherModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-hidden']: true
		});
	});

	it('Should add `.is-sr-only` when prop `screenreader` is set to `true`', () => {
		// Arrange
		const props: OtherModifierProps = {
			screenreader: true
		};

		// Act
		const classes = AddOtherModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-sr-only']: true
		});
	});

	it('Should add `.is-relative` when prop `relative` is set to `true`', () => {
		// Arrange
		const props: OtherModifierProps = {
			relative: true
		};

		// Act
		const classes = AddOtherModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-relative']: true
		});
	});
});
