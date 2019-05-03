import { FunctionalComponent, h, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { Alignments, OtherSizes } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import Item, { BreadcrumbItemProps } from './Item';

interface BreadcrumbProps extends ModifierProps {
	align?: Alignments;
	separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
	size?: OtherSizes;
}

const Breadcrumb = BuildElement<BreadcrumbProps>('breadcrumb', {
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
	[_ in 'Item']: FunctionalComponent<BreadcrumbItemProps>
});

export default Breadcrumb;
Breadcrumb.Item = Item;
