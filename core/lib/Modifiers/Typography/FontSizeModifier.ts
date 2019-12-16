import { PropBuilder } from '../../PropBuilder';
import { TextSizes, WithBreakpoints } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface FontSizeModifierProps {
	'font-size'?: TextSizes | WithBreakpoints<TextSizes>;
}

export const AddFontSizeModifierProps = <P extends FontSizeModifierProps>(props: P): ListOfClasses => ({
	...PropBuilder(props['font-size'], 'is-size')
});
