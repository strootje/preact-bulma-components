import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddAlignmentModifierProps, AlignmentModifierProps } from "../../../lib/Modifiers/Typography/AlignmentModifier";

describe('AddAlignmentModifierProps', () => {
	it('Should add `.has-text-centered` when prop `align` is set to `centered`', () => {
		// Arrange
		const props: AlignmentModifierProps = {
			align: 'centered'
		};

		// Act
		const classes = AddAlignmentModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['has-text-centered']: true
		});
	});

	it('Should add `.has-text-left-mobile` when prop `align.mobile` is set to `left`', () => {
		// Arrange
		const props: AlignmentModifierProps = {
			align: {
				mobile: 'left'
			}
		};

		// Act
		const classes = AddAlignmentModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['has-text-left-mobile']: true
		});
	});

	it('Should add `.has-text-left-mobile .has-text-justified` when prop `align.mobile` is set to `left` and `size.fallback` is set to `justified`', () => {
		// Arrange
		const props: AlignmentModifierProps = {
			align: {
				mobile: 'left',
				fallback: 'justified'
			}
		};

		// Act
		const classes = AddAlignmentModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['has-text-left-mobile']: true,
			['has-text-justified']: true
		});
	});
});
