import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddSizeModifierProps, SizeModifierProps } from "../../../lib/Modifiers/Syntax/SizeModifier";

describe('AddSizeModifierProps', () => {
	it('Should add `.is-large` when prop `size` is set to `large`', () => {
		// Arrange
		const props: SizeModifierProps = {
			size: 'large'
		};

		// Act
		const classes = AddSizeModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-large']: true
		});
	});
});
