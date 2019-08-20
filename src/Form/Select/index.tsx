import { h } from 'preact';
import { Colors, OtherSizes } from '../../Bulma';
import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { AddInputAttributes, AddInputClasses, InputBaseAttribs } from '../InputBase';
import { SelectOption, SelectOptionAttribs, SelectOptionProps } from './Option';
export { SelectOption, SelectOptionAttribs, SelectOptionProps } from './Option';

export interface SelectProps extends ModifierProps {
	color?: Colors;
	rounded?: boolean;
	size?: OtherSizes;
}

export interface SelectAttribs extends InputBaseAttribs {
	multiple?: boolean;
}

export const Select = ElementBuilder<SelectProps, SelectAttribs>('select', {
	attribs: (props) => ({
		...AddInputAttributes(props),
		['multiple']: !!props.multiple
	}),

	classes: (props) => ({
		...AddInputClasses(props)
	}),

	render: (className, attribs, { children }) => (
		<div class={className}>
			<select {...attribs}>
				{children}
			</select>
		</div>
	)
}) as (Component<SelectProps, SelectAttribs> & {
	Option: Component<SelectOptionProps, SelectOptionAttribs>;
});

Select.Option = SelectOption;
