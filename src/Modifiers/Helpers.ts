import { ListOfClasses, Sides } from '../Bulma';

export interface HelperModifierProps {
	clearfix?: boolean;
	pulled?: Sides;
	marginless?: boolean;
	paddingless?: boolean;
	overlay?: boolean;
	clipped?: boolean;
	radiusless?: boolean;
	shadowless?: boolean;
	unselectable?: boolean;
	invisible?: boolean;
	screenreader?: boolean;
}

export function AddHelperModifierClasses(props: HelperModifierProps): ListOfClasses {
	return {
		['is-clearfix']: !!props.clearfix,
		['is-pulled-left']: !!(props.pulled === 'left'),
		['is-pulled-right']: !!(props.pulled === 'right'),
		['is-marginless']: !!props.marginless,
		['is-paddingless']: !!props.paddingless,
		['is-overlay']: !!props.overlay,
		['is-clipped']: !!props.clipped,
		['is-radiusless']: !!props.radiusless,
		['is-shadowless']: !!props.shadowless,
		['is-unselectable']: !!props.unselectable,
		['is-invisible']: !!props.invisible,
		['is-sr-only']: !!props.screenreader
	};
}
