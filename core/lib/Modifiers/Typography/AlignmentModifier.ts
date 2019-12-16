import { PropBuilder } from '../../PropBuilder';
import { TextAlignments, WithBreakpoints } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface AlignmentModifierProps {
	align?: TextAlignments | WithBreakpoints<TextAlignments>;
}

export const AddAlignmentModifierProps = <P extends AlignmentModifierProps>(props: P): ListOfClasses => ({
	...PropBuilder(props.align, 'has-text')
});
