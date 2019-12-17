import { AttrBuilder } from '../../AttrBuilder';
import { DisplayTypes, DisplayTypesWithHidden, WithBreakpoints } from '../../Types/Bulma';
import { ListOfClasses, Props } from '../../Types/Preact';

export interface DisplayModifierProps {
	display?: DisplayTypes | WithBreakpoints<DisplayTypesWithHidden>;
}

export const AddDisplayModifierProps = <P extends DisplayModifierProps, A>(props: Props<P, A>): ListOfClasses => ({
	...AttrBuilder<P, A>(props, 'display')
})
