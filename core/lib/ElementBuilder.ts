import ClassNames from 'classnames';
import { h } from 'preact';
import { Attribs, Component, ComponentProps, ElementBuilderOpts } from "./Types/Preact";

export function ElementBuilder<P = {}, A extends EventTarget = HTMLDivElement>(opts: ElementBuilderOpts<P, A>): Component<P, A>;
export function ElementBuilder<P = {}, A extends EventTarget = HTMLDivElement>(name: string, opts?: ElementBuilderOpts<P, A>): Component<P, A>;
export function ElementBuilder<P = {}, A extends EventTarget = HTMLDivElement>(name: string | ElementBuilderOpts<P, A>, opts?: ElementBuilderOpts<P, A>): Component<P, A> {
	if (typeof name === 'string') {
		return elementBuilder(name, opts || {});
	} else {
		return elementBuilder('', name || {});
	}
}

const elementBuilder = <P, A extends EventTarget>(name: string, opts: ElementBuilderOpts<P, A>): Component<P, A> => {
	const addAttribs = opts.attribs || (() => ({}));
	const addClasses = opts.classes || (() => ({}));
	const render = opts.render || 'div';

	return (props: ComponentProps<P, A>) => {
		const className = ClassNames(name, {
			...addClasses(props)
		});

		const attribs: Attribs<A> = {
			...addAttribs(props)
		};

		if (typeof render === 'string') {
			return h(render, { class: className, children: props.children, ...attribs });
		} else {
			return render(className, props, attribs);
		}
	}
}
