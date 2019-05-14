import { FunctionalComponent, h, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { Colors, OtherSizes } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import { AddInputAttributes, AddInputClasses } from '../InputBase';
import { SelectOption, SelectOptionProps } from './Option';
export { SelectOption, SelectOptionProps } from './Option';

export interface SelectProps extends ModifierProps {
	color?: Colors;
	multiple?: boolean;
	rounded?: boolean;
	size?: OtherSizes;
}

export const Select = BuildElement<SelectProps>('select', {
	addAttributes: (props) => ({
		...AddInputAttributes(props),
		[`multiple`]: !!props.multiple
	}),

	addClasses: (props) => ({
		...AddInputClasses(props)
	}),

	render: (className, attribs, { children }) => (
		<div class={className}>
			<select {...attribs}>
				{children}
			</select>
		</div>
	)
}) as (FunctionalComponent<RenderableProps<SelectProps>> & {
	Option: FunctionalComponent<RenderableProps<SelectOptionProps>>;
});

Select.Option = SelectOption;
