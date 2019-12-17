import { AttrBuilder } from '../../AttrBuilder';
import { TextSizes, WithBreakpoints } from '../../Types/Bulma';
import { ListOfClasses, Props } from '../../Types/Preact';

export interface FontSizeModifierProps {
	'font-size'?: TextSizes | WithBreakpoints<TextSizes>;
}

export const AddFontSizeModifierProps = <P extends FontSizeModifierProps, A>(props: Props<P, A>): ListOfClasses => ({
	...AttrBuilder<P, A>(props, 'font-size', 'is-size')
});
