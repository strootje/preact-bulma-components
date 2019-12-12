import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddWeightModifierProps, WeightModifierProps } from "../../../lib/Modifiers/Typography/WeightModifier";

describe('AddWeightModifierProps', () => {
	it('Should add `.has-text-weight-semibold` when prop `weight` is set to `semibold`', () => {
		// Arrange
		const props: WeightModifierProps = {
			weight: 'semibold'
		};

		// Act
		const classes = AddWeightModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['has-text-weight-semibold']: true
		});
	});
});
