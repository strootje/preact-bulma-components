import { FunctionalComponent, h, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { Alignments, OtherSizes } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import { BreadcrumbItem, BreadcrumbItemProps } from './Item';
export { BreadcrumbItem, BreadcrumbItemProps } from './Item';

export interface BreadcrumbProps extends ModifierProps {
	align?: Alignments;
	separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
	size?: OtherSizes;
}

export const Breadcrumb = BuildElement<BreadcrumbProps>('breadcrumb', {
	addAttributes: () => ({
		['aria-label']: 'breadcrumbs'
	}),

	addClasses: (props) => ({
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
}) as (FunctionalComponent<RenderableProps<BreadcrumbProps>> & {
	Item: FunctionalComponent<BreadcrumbItemProps>
});

Breadcrumb.Item = BreadcrumbItem;
