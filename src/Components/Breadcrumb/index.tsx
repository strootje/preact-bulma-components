import { h } from 'preact';
import { Alignments, OtherSizes } from '../../Bulma';
import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { BreadcrumbItem, BreadcrumbItemAttribs, BreadcrumbItemProps } from './Item';
export { BreadcrumbItem, BreadcrumbItemAttribs, BreadcrumbItemProps } from './Item';

export interface BreadcrumbProps extends ModifierProps {
	align?: Alignments;
	separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
	size?: OtherSizes;
}

export interface BreadcrumbAttribs {
	'aria-label'?: string;
}

export const Breadcrumb = ElementBuilder<BreadcrumbProps, BreadcrumbAttribs>('breadcrumb', {
	attribs: () => ({
		'aria-label': 'breadcrumbs'
	}),

	classes: (props) => ({
		[`is-${props.align}`]: !!props.align,
		[`has-${props.separator}-separator`]: !!props.separator,
		[`is-${props.size}`]: !!props.size
	}),

	render: (className, attribs, { children }) => (
		<nav class={className} {...attribs}>
			<ul>
				{children}
			</ul>
		</nav>
	)
}) as (Component<BreadcrumbProps, BreadcrumbAttribs> & {
	Item: Component<BreadcrumbItemProps, BreadcrumbItemAttribs>;
});

Breadcrumb.Item = BreadcrumbItem;
