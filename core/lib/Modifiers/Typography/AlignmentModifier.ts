import { AttrBuilder } from '../../AttrBuilder';
import { TextAlignments, WithBreakpoints } from '../../Types/Bulma';
import { ListOfClasses, Props } from '../../Types/Preact';

export interface AlignmentModifierProps {
	align?: TextAlignments | WithBreakpoints<TextAlignments>;
}

export const AddAlignmentModifierProps = <P extends AlignmentModifierProps, A>(props: Props<P, A>): ListOfClasses => ({
	...AttrBuilder<P, A>(props, 'align', 'has-text')
});
