import { PropBuilder } from '../../PropBuilder';
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

export const AddOtherModifierProps = <P extends OtherModifierProps>(props: P): ListOfClasses => ({
	...PropBuilder(props.clipped, 'is-clipped'),
	...PropBuilder(props.hidden, 'is-hidden'),
	...PropBuilder(props.invisible, 'is-invisible'),
	...PropBuilder(props.overlay, 'is-overlay'),
	...PropBuilder(props.radiusless, 'is-radiusless'),
	...PropBuilder(props.relative, 'is-relative'),
	...PropBuilder(props.screenreader, 'is-sr-only'),
	...PropBuilder(props.shadowless, 'is-shadowless'),
	...PropBuilder(props.unselectable, 'is-unselectable')
});
