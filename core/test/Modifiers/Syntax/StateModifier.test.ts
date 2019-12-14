import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddStateModifierProps, StateModifierProps } from "../../../lib/Modifiers/Syntax/StateModifier";

describe('AddStateModifierProps', () => {
	it('Should add `.is-outlined` when prop `outlined` is set to `true`', () => {
		// Arrange
		const props: StateModifierProps = {
			outlined: true
		};

		// Act
		const classes = AddStateModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-outlined']: true
		});
	});

	it('Should add `.is-loading` when prop `loading` is set to `true`', () => {
		// Arrange
		const props: StateModifierProps = {
			loading: true
		};

		// Act
		const classes = AddStateModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-loading']: true
		});
	});

	it('Should add `.is-outlined .is-loading` when prop `outlined` is set to `true` and `loading` is set to `true`', () => {
		// Arrange
		const props: StateModifierProps = {
			outlined: true,
			loading: true
		};

		// Act
		const classes = AddStateModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-outlined']: true,
			['is-loading']: true
		});
	});
});
