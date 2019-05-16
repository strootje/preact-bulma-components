import { h } from 'preact';
import { Alignments, OtherSizes } from '../../Bulma';
import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { Tab, TabAttribs, TabProps } from './Tab';
export { Tab, TabAttribs, TabProps } from './Tab';

export interface TabsProps extends ModifierProps {
	align?: Alignments;
	boxed?: boolean;
	fullwidth?: boolean;
	size?: OtherSizes;
	toggle?: boolean | 'rounded';
}

export interface TabsAttribs {
}

export const Tabs = ElementBuilder<TabsProps, TabsAttribs>('tabs', {
	classes: (props) => ({
		[`is-${props.align}`]: !!props.align,
		[`is-boxed`]: !!props.boxed,
		[`is-fullwidth`]: !!props.fullwidth,
		[`is-${props.size}`]: !!props.size,
		[`is-toggle`]: !!props.toggle,
		[`is-toggle-rounded`]: props.toggle === 'rounded'
	}),

	render: (className, attribs, { children }) => (
		<div class={className} {...attribs}>
			<ul>
				{children}
			</ul>
		</div>
	)
}) as (Component<TabsProps, TabsAttribs> & {
	Tab: Component<TabProps, TabAttribs>;
});

Tabs.Tab = Tab;
