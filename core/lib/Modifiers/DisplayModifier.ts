import { DisplayTypes, DisplayTypesWithHidden, WithBreakpoints } from '../Types/Bulma';
import { ListOfClasses } from '../Types/Preact';

export interface DisplayModifierProps {
	display?: DisplayTypes | WithBreakpoints<DisplayTypesWithHidden>;
}

export const AddDisplayModifierProps = <P extends DisplayModifierProps>(props: P): ListOfClasses => {
	if (!props.display) {
		return {};
	}

	const classes: ListOfClasses = {};
	if (typeof props.display === 'string') {
		classes[`is-${props.display}`] = !!props.display;
	} else {
		if (props.display.mobile) {
			classes[`is-${props.display.mobile}-mobile`] = !!props.display.mobile;
		}

		if (props.display['tablet-only']) {
			classes[`is-${props.display['tablet-only']}-tablet-only`] = !!props.display['tablet-only'];
		}

		if (props.display['widescreen-only']) {
			classes[`is-${props.display['widescreen-only']}-widescreen-only`] = !!props.display['widescreen-only'];
		}

		if (props.display['widescreen-only']) {
			classes[`is-${props.display['widescreen-only']}-widescreen-only`] = !!props.display['widescreen-only'];
		}

		if (props.display.touch) {
			classes[`is-${props.display.touch}-touch`] = !!props.display.touch;
		}

		if (props.display.tablet) {
			classes[`is-${props.display.tablet}-tablet`] = !!props.display.tablet;
		}

		if (props.display.desktop) {
			classes[`is-${props.display.desktop}-desktop`] = !!props.display.desktop;
		}

		if (props.display.widescreen) {
			classes[`is-${props.display.widescreen}-widescreen`] = !!props.display.widescreen;
		}

		if (props.display.fullhd) {
			classes[`is-${props.display.fullhd}-fullhd`] = !!props.display.fullhd;
		}
	}

	return classes;
};
