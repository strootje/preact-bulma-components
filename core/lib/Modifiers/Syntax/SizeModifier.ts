import { SizeTypes } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface SizeModifierProps {
	'elem-size'?: SizeTypes;
}

export const AddSizeModifierProps = <P extends SizeModifierProps>(props: P): ListOfClasses => {
	return {
		[`is-${props['elem-size']}`]: !!props['elem-size']
	}
};
