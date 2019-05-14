import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import { CardContent, CardContentProps } from './Content';
import { CardFooter, CardFooterProps } from './Footer';
import { CardFooterItem, CardFooterItemProps } from './FooterItem';
import { CardHeader, CardHeaderProps } from './Header';
import { CardHeaderIcon, CardHeaderIconProps } from './HeaderIcon';
import { CardHeaderTitle, CardHeaderTitleProps } from './HeaderTitle';
export { CardContent, CardContentProps } from './Content';
export { CardFooter, CardFooterProps } from './Footer';
export { CardFooterItem, CardFooterItemProps } from './FooterItem';
export { CardHeader, CardHeaderProps } from './Header';
export { CardHeaderIcon, CardHeaderIconProps } from './HeaderIcon';
export { CardHeaderTitle, CardHeaderTitleProps } from './HeaderTitle';

export interface CardProps extends ModifierProps {
}

export const Card = BuildElement<CardProps>('card', {
}) as (FunctionalComponent<RenderableProps<CardProps>> & {
	Content: FunctionalComponent<RenderableProps<CardContentProps>>;
	Header: FunctionalComponent<RenderableProps<CardHeaderProps>>;
	HeaderIcon: FunctionalComponent<RenderableProps<CardHeaderIconProps>>;
	HeaderTitle: FunctionalComponent<RenderableProps<CardHeaderTitleProps>>;
	Footer: FunctionalComponent<RenderableProps<CardFooterProps>>;
	FooterItem: FunctionalComponent<RenderableProps<CardFooterItemProps>>;
});

Card.Content = CardContent;
Card.Header = CardHeader;
Card.HeaderIcon = CardHeaderIcon;
Card.HeaderTitle = CardHeaderTitle;
Card.Footer = CardFooter;
Card.FooterItem = CardFooterItem;
