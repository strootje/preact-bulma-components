import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddStyleModifierProps, StyleModifierProps } from "../../../lib/Modifiers/Syntax/StyleModifier";

describe('AddStyleModifierProps', () => {
	it('Should add `.is-primary` when prop `style` is set to `primary`', () => {
		// Arrange
		const props: StyleModifierProps = {
			style: 'primary'
		};

		// Act
		const classes = AddStyleModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-primary']: true
		});
	});

	it('Should add `.is-info` when prop `style` is set to `info`', () => {
		// Arrange
		const props: StyleModifierProps = {
			style: 'info'
		};

		// Act
		const classes = AddStyleModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-info']: true
		});
	});
});
