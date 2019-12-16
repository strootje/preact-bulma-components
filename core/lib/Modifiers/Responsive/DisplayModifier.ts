import { PropBuilder } from '../../PropBuilder';
import { DisplayTypes, DisplayTypesWithHidden, WithBreakpoints } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface DisplayModifierProps {
	display?: DisplayTypes | WithBreakpoints<DisplayTypesWithHidden>;
}

export const AddDisplayModifierProps = <P extends DisplayModifierProps>(props: P): ListOfClasses => ({
	...PropBuilder(props.display)
})
