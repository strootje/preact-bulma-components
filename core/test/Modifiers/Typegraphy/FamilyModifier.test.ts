import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddFamilyModifierProps, FamilyModifierProps } from "../../../lib/Modifiers/Typography/FamilyModifier";

describe('AddFamilyModifierProps', () => {
	it('Should add `.is-family-code` when prop `font` is set to `code`', () => {
		// Arrange
		const props: FamilyModifierProps = {
			font: 'code'
		};

		// Act
		const classes = AddFamilyModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-family-code']: true
		});
	});
});
