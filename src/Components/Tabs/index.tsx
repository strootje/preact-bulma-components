import { FunctionalComponent, h, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { Alignments, OtherSizes } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import Tab from './Tab';

interface TabsProps extends ModifierProps {
	align?: Alignments;
	boxed?: boolean;
	fullwidth?: boolean;
	size?: OtherSizes;
	toggle?: boolean | 'rounded';
}

const Tabs = BuildElement<TabsProps>('tabs', {
	addClasses: (props) => ({
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
}) as (FunctionalComponent<RenderableProps<TabsProps>> & {
	[_ in 'Tab']: FunctionalComponent<any>
});

export default Tabs;
Tabs.Tab = Tab;
