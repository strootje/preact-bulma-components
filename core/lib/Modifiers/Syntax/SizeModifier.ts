import { PropBuilder } from '../../PropBuilder';
import { SizeTypes } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface SizeModifierProps {
	'elem-size'?: SizeTypes;
}

export const AddSizeModifierProps = <P extends SizeModifierProps>(props: P): ListOfClasses => ({
	...PropBuilder(props['elem-size'])
});
