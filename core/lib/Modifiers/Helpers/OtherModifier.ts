import { ListOfClasses } from '../../Types/Preact';

export interface OtherModifierProps {
	overlay?: boolean;
	clipped?: boolean;
	radiusless?: boolean;
	shadowless?: boolean;
	unselectable?: boolean;
	invisible?: boolean;
	hidden?: boolean;
	screenreader?: boolean;
	relative?: boolean;
}

export const AddOtherModifierProps = <P extends OtherModifierProps>(props: P): ListOfClasses => {
	// TODO: cleanup (this always returns all values)
	return {
		[`is-overlay`]: !!props.overlay,
		[`is-clipped`]: !!props.clipped,
		[`is-radiusless`]: !!props.radiusless,
		[`is-shadowless`]: !!props.shadowless,
		[`is-unselectable`]: !!props.unselectable,
		[`is-invisible`]: !!props.invisible,
		[`is-hidden`]: !!props.hidden,
		[`is-sr-only`]: !!props.screenreader,
		[`is-relative`]: !!props.relative
	};
};
