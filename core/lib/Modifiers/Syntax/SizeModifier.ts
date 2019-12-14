import { SizeTypes } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface SizeModifierProps {
	size?: SizeTypes;
}

export const AddSizeModifierProps = <P extends SizeModifierProps>(props: P): ListOfClasses => {
	return {
		[`is-${props.size}`]: !!props.size
	}
};
