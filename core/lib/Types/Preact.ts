import { FunctionalComponent, JSX, RenderableProps, VNode,  } from 'preact';

type AllowedHtmlElements = keyof JSX.IntrinsicElements;
export type Props<P> = RenderableProps<P>;
export type Attribs<A extends EventTarget> = JSX.DOMAttributes<A> & JSX.HTMLAttributes & JSX.SVGAttributes;
export type ComponentProps<P, A extends EventTarget> = Props<P> & Attribs<A>;
export interface Component<P, A extends EventTarget> extends FunctionalComponent<ComponentProps<P, A>> { };

export interface ListOfClasses { [_: string]: boolean; }
export type ListOfAttribs<A extends EventTarget> = { [Key in keyof A]?: A[Key]; }

export interface ClassListBuilder<P, A extends EventTarget> {
	(props: ComponentProps<P, A>): ListOfClasses;
}

export interface AttribListBuilder<P, A extends EventTarget> {
	(props: ComponentProps<P, A>): ListOfAttribs<A>;
}

export interface RenderComponent<P, A extends EventTarget> {
	(name: string, props: Props<P>, attribs: Attribs<A>): VNode<any> | null;
}

export interface ElementBuilderOpts<P, A extends EventTarget> {
	attribs?: AttribListBuilder<P, A>;
	classes?: ClassListBuilder<P, A>;
	render?: AllowedHtmlElements | RenderComponent<P, A>;
}
