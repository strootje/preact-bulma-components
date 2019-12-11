export type ColorsStyled =
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
export type ColorsNamed =
    | 'white'
    | 'black'
    | 'light'
    | 'dark'
    | 'black-bis'
    | 'black-ter'
    | 'gray-darker'
    | 'gray-dark'
    | 'gray'
    | 'gray-light'
    | 'gray-lighter'
    | 'white-ter'
    | 'white-bis';
export type Colors = ColorsStyled & ColorsNamed;
