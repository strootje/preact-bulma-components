import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddSpacingModifierProps, SpacingModifierProps } from "../../../lib/Modifiers/Helpers/SpacingModifier";

describe('AddSpacingModifierProps', () => {
	it('Should add `.is-marginless` when prop `marginless` is set to `true`', () => {
		// Arrange
		const props: SpacingModifierProps = {
			marginless: true
		};

		// Act
		const classes = AddSpacingModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-marginless']: true
		});
	});

	it('Should add `.is-paddingless` when prop `paddingless` is set to `true`', () => {
		// Arrange
		const props: SpacingModifierProps = {
			paddingless: true
		};

		// Act
		const classes = AddSpacingModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-paddingless']: true
		});
	});
});
