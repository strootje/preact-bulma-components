import { h } from 'preact';
import { OtherSizes } from '../Bulma';
import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

const defaultClassName = 'icon';

export interface IconProps extends ModifierProps {
	base?: string;
	children: string;
	size?: OtherSizes;
}

export interface IconAttribs {
}

const replaceWithBase = (className: string, baseName?: string): string => {
	return !baseName ? className : className.replace(defaultClassName, `${baseName}-${defaultClassName}`);
};

export const Icon = ElementBuilder<IconProps, IconAttribs>(defaultClassName, {
	classes: (props) => ({
		[`is-${props.size}`]: !!props.size
	}),

	render: (className, attribs, { base, children }) => (
		<span class={replaceWithBase(className, base)} {...attribs}>
			<i class={children.toString()}></i>
		</span>
	)
});
