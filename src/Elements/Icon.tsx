import { h } from 'preact';
import BuildElement from '../BuildElement';
import { OtherSizes } from '../Bulma';
import { ModifierProps } from '../Modifiers';

const defaultClassName = 'icon';

export interface IconProps extends ModifierProps {
	base?: string;
	children: string;
	size?: OtherSizes;
}

const replaceWithBase = (className: string, baseName?: string): string => {
	return !baseName ? className : className.replace(defaultClassName, `${baseName}-${defaultClassName}`);
};

export const Icon = BuildElement<IconProps>(defaultClassName, {
	addClasses: (props) => ({
		[`is-${props.size}`]: !!props.size
	}),

	render: (className, attribs, { base, children }) => (
		<span class={replaceWithBase(className, base)} {...attribs}>
			<i class={children.toString()}></i>
		</span>
	)
});
