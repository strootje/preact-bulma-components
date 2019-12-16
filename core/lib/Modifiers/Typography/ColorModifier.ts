import { PropBuilder } from '../../PropBuilder';
import { Colors } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface ColorModifierProps {
	'background-color'?: Colors;
	'text-color'?: Colors;
}

export const AddColorModifierProps = <P extends ColorModifierProps>(props: P): ListOfClasses => ({
	...PropBuilder(props['background-color'], 'has-background'),
	...PropBuilder(props['text-color'], 'has-text')
});
