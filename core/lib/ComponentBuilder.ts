import ClassNames from 'classnames';
import { h } from 'preact';
import { AddModifierAttribs, AddModifierProps } from './Modifiers';
import { Component, ComponentBuilderOpts, Props } from './Types/Preact';

export function ComponentBuilder<P = {}, A = {}, E extends EventTarget = HTMLDivElement>(opts: ComponentBuilderOpts<P, A, E>): Component<P, A>;
export function ComponentBuilder<P = {}, A = {}, E extends EventTarget = HTMLDivElement>(name: string, opts?: ComponentBuilderOpts<P, A, E>): Component<P, A>;
export function ComponentBuilder<P = {}, A = {}, E extends EventTarget = HTMLDivElement>(name: string | ComponentBuilderOpts<P, A, E>, opts?: ComponentBuilderOpts<P, A, E>): Component<P, A> {
	if (typeof name === 'string') {
		return componentBuilder(name, opts || {});
	} else {
		return componentBuilder('', name || {});
	}
}

const componentBuilder = <P, A, E extends EventTarget>(name: string, opts: ComponentBuilderOpts<P, A, E>): Component<P, A> => {
	const render = opts.render || 'div';
	const addClasses = opts.classes || (() => ({}));
	const addAttribs = opts.attribs || (() => ({}));

	return (props: Props<P, A>) => {
		const classNames = ClassNames(name, {
			...AddModifierProps<P, A>(props),
			...addClasses(props)
		});

		const attribs = {
			...AddModifierAttribs<P, A, E>(props),
			...addAttribs(props)
		};

		if (typeof render === 'string') {
			return h(render, { class: classNames, ...attribs }, props.children);
		} else {
			return render(props, { class: classNames, ...attribs });
		}
	};
};
