import { FunctionalComponent, JSX, RenderableProps, VNode } from 'preact';

type AllowedHtmlElements = keyof JSX.IntrinsicElements;
type InternalProps<P, A> = P & A;
export type Props<P, A> = RenderableProps<InternalProps<P, A>>;
export interface Component<P, A> extends FunctionalComponent<InternalProps<P, A>> { }
export type ListOfClasses = { [_: string]: boolean; }
export type ListOfAttribs<A, E extends EventTarget> = { [Key in keyof (A & JSX.HTMLAttributes<E>)]?: (A & JSX.HTMLAttributes<E>)[Key]; }

export interface ComponentRenderer<P, A, E extends EventTarget> {
	(props: Props<P, A>, attribs: ListOfAttribs<A, E>): (null | VNode<any>);
}

export interface ListOfClassesBuilder<P, A> {
	(props: Props<P, A>): ListOfClasses;
}

export interface ListOfAttribsBuilder<P, A, E extends EventTarget> {
	(props: Props<P, A>): ListOfAttribs<A, E>;
}


export interface ComponentBuilderOpts<P, A, E extends EventTarget> {
	render?: AllowedHtmlElements | ComponentRenderer<P, A, E>;
	classes?: ListOfClassesBuilder<P, A>;
	attribs?: ListOfAttribsBuilder<P, A, E>;
}
