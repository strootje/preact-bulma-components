import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddFloatModifierProps, FloatModifierProps } from "../../../lib/Modifiers/Helpers/FloatModifier";

describe('AddFloatModifierProps', () => {
	it('Should add `.is-clearfix` when prop `float` is set to `clear`', () => {
		// Arrange
		const props: FloatModifierProps = {
			float: 'clear'
		};

		// Act
		const classes = AddFloatModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-clearfix']: true
		});
	});

	it('Should add `.is-pulled-left` when prop `float` is set to `left`', () => {
		// Arrange
		const props: FloatModifierProps = {
			float: 'left'
		};

		// Act
		const classes = AddFloatModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-pulled-left']: true
		});
	});
});
