import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { PanelBlock, PanelBlockAttribs, PanelBlockProps } from './Block';
import { PanelCheckbox, PanelCheckboxAttribs, PanelCheckboxProps } from './Checkbox';
import { PanelHeader, PanelHeaderAttribs, PanelHeaderProps } from './Header';
import { PanelLink, PanelLinkAttribs, PanelLinkProps } from './Link';
import { PanelTab, PanelTabAttribs, PanelTabProps } from './Tab';
import { PanelTabs, PanelTabsAttribs, PanelTabsProps } from './Tabs';
export { PanelBlock, PanelBlockAttribs, PanelBlockProps } from './Block';
export { PanelCheckbox, PanelCheckboxAttribs, PanelCheckboxProps } from './Checkbox';
export { PanelHeader, PanelHeaderAttribs, PanelHeaderProps } from './Header';
export { PanelLink, PanelLinkAttribs, PanelLinkProps } from './Link';
export { PanelTab, PanelTabAttribs, PanelTabProps } from './Tab';
export { PanelTabs, PanelTabsAttribs, PanelTabsProps } from './Tabs';

export interface PanelProps extends ModifierProps {
}

export interface PanelAttribs {
}

export const Panel = ElementBuilder<PanelProps, PanelAttribs>('panel', {
	render: 'nav'
}) as (Component<PanelProps, PanelAttribs> & {
	Block: Component<PanelBlockProps, PanelBlockAttribs>;
	Checkbox: Component<PanelCheckboxProps, PanelCheckboxAttribs>;
	Header: Component<PanelHeaderProps, PanelHeaderAttribs>;
	Link: Component<PanelLinkProps, PanelLinkAttribs>;
	Tab: Component<PanelTabProps, PanelTabAttribs>;
	Tabs: Component<PanelTabsProps, PanelTabsAttribs>;
});

Panel.Checkbox = PanelBlock;
Panel.Block = PanelCheckbox;
Panel.Header = PanelHeader;
Panel.Link = PanelLink;
Panel.Tab = PanelTab;
Panel.Tabs = PanelTabs;
