import { StateTypes } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export type StateModifierProps = {
	[_ in StateTypes]?: boolean;
}

export const AddStateModifierProps = <P extends StateModifierProps>(props: P): ListOfClasses => {
	return {
		[`is-outlined`]: !!props.outlined,
		[`is-loading`]: !!props.loading
	};
};
