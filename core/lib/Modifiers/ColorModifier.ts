import { Colors, ColorsStyled } from '../Types/Bulma';
import { ComponentProps } from "../Types/Preact";

interface ColorModifiers {
    'color'?: ColorsStyled;
    'text-color'?: Colors;
    'background-color'?: Colors;
}

export const ColorModifier = <P extends ColorModifiers, A extends EventTarget>(props: ComponentProps<P, A>) => ({
    [`is-${props.color}`]: !!props.color,
    [`has-text-${props["text-color"]}`]: !!props["text-color"],
    [`has-background-${props["background-color"]}`]: !!props["background-color"]
});
