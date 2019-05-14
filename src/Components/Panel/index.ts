import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import { PanelBlock, PanelBlockProps } from './Block';
import { PanelCheckbox, PanelCheckboxProps } from './Checkbox';
import { PanelHeader, PanelHeaderProps } from './Header';
import { PanelLink, PanelLinkProps } from './Link';
import { PanelTab, PanelTabProps } from './Tab';
import { PanelTabs, PanelTabsProps } from './Tabs';
export { PanelBlock, PanelBlockProps } from './Block';
export { PanelCheckbox, PanelCheckboxProps } from './Checkbox';
export { PanelHeader, PanelHeaderProps } from './Header';
export { PanelLink, PanelLinkProps } from './Link';
export { PanelTab, PanelTabProps } from './Tab';
export { PanelTabs, PanelTabsProps } from './Tabs';

export interface PanelProps extends ModifierProps {
}

export const Panel = BuildElement<PanelProps>('panel', {
	render: 'nav'
}) as (FunctionalComponent<RenderableProps<PanelProps>> & {
	Block: FunctionalComponent<RenderableProps<PanelBlockProps>>;
	Checkbox: FunctionalComponent<RenderableProps<PanelCheckboxProps>>;
	Header: FunctionalComponent<RenderableProps<PanelHeaderProps>>;
	Link: FunctionalComponent<RenderableProps<PanelLinkProps>>;
	Tab: FunctionalComponent<RenderableProps<PanelTabProps>>;
	Tabs: FunctionalComponent<RenderableProps<PanelTabsProps>>;
});

Panel.Checkbox = PanelBlock;
Panel.Block = PanelCheckbox;
Panel.Header = PanelHeader;
Panel.Link = PanelLink;
Panel.Tab = PanelTab;
Panel.Tabs = PanelTabs;
