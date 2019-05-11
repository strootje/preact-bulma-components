import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import Block, { PanelBlockProps } from './Block';
import Checkbox, { PanelCheckboxProps } from './Checkbox';
import Header, { PanelHeaderProps } from './Header';
import Link, { PanelLinkProps } from './Link';
import Tab, { PanelTabProps } from './Tab';
import Tabs, { PanelTabsProps } from './Tabs';

export interface PanelProps extends ModifierProps {
}

const Panel = BuildElement<PanelProps>('panel', {
	render: 'nav'
}) as (FunctionalComponent<RenderableProps<PanelProps>> & {
	Block: FunctionalComponent<RenderableProps<PanelBlockProps>>;
	Checkbox: FunctionalComponent<RenderableProps<PanelCheckboxProps>>;
	Header: FunctionalComponent<RenderableProps<PanelHeaderProps>>;
	Link: FunctionalComponent<RenderableProps<PanelLinkProps>>;
	Tab: FunctionalComponent<RenderableProps<PanelTabProps>>;
	Tabs: FunctionalComponent<RenderableProps<PanelTabsProps>>;
});

export default Panel;
Panel.Checkbox = Checkbox;
Panel.Block = Block;
Panel.Header = Header;
Panel.Link = Link;
Panel.Tab = Tab;
Panel.Tabs = Tabs;
