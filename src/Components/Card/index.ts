import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { CardContent, CardContentAttribs, CardContentProps } from './Content';
import { CardFooter, CardFooterAttribs, CardFooterProps } from './Footer';
import { CardFooterItem, CardFooterItemAttribs, CardFooterItemProps } from './FooterItem';
import { CardHeader, CardHeaderAttribs, CardHeaderProps } from './Header';
import { CardHeaderIcon, CardHeaderIconAttribs, CardHeaderIconProps } from './HeaderIcon';
import { CardHeaderTitle, CardHeaderTitleAttribs, CardHeaderTitleProps } from './HeaderTitle';
export { CardContent, CardContentAttribs, CardContentProps } from './Content';
export { CardFooter, CardFooterAttribs, CardFooterProps } from './Footer';
export { CardFooterItem, CardFooterItemAttribs, CardFooterItemProps } from './FooterItem';
export { CardHeader, CardHeaderAttribs, CardHeaderProps } from './Header';
export { CardHeaderIcon, CardHeaderIconAttribs, CardHeaderIconProps } from './HeaderIcon';
export { CardHeaderTitle, CardHeaderTitleAttribs, CardHeaderTitleProps } from './HeaderTitle';

export interface CardProps extends ModifierProps {
}

export interface CardAttribs {
}

export const Card = ElementBuilder<CardProps, CardAttribs>('card', {
}) as (Component<CardProps, CardAttribs> & {
	Content: Component<CardContentProps, CardContentAttribs>;
	Header: Component<CardHeaderProps, CardHeaderAttribs>;
	HeaderIcon: Component<CardHeaderIconProps, CardHeaderIconAttribs>;
	HeaderTitle: Component<CardHeaderTitleProps, CardHeaderTitleAttribs>;
	Footer: Component<CardFooterProps, CardFooterAttribs>;
	FooterItem: Component<CardFooterItemProps, CardFooterItemAttribs>;
});

Card.Content = CardContent;
Card.Header = CardHeader;
Card.HeaderIcon = CardHeaderIcon;
Card.HeaderTitle = CardHeaderTitle;
Card.Footer = CardFooter;
Card.FooterItem = CardFooterItem;
