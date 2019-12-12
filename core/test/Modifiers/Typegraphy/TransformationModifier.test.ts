import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddTransformationModifierProps, TransformationModifierProps } from "../../../lib/Modifiers/Typography/TransformationModifier";

describe('AddTransformationModifierProps', () => {
	it('Should add `.is-capitalized` when prop `transform` is set to `capitalized`', () => {
		// Arrange
		const props: TransformationModifierProps = {
			transform: 'capitalized'
		};

		// Act
		const classes = AddTransformationModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-capitalized']: true
		});
	});
});
