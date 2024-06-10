export interface PublicInput {
    type: InputTypes,
    theme: 'primary',
    customClassList: string[],
    id: string,
    hasLabel: boolean,
    labelText: string,
    placeholder: string
}

export interface PublicTextarea {
    theme: 'primary',
    customClassList: string[],
    id: string,
    hasLabel: boolean,
    labelText: string,
    placeholder: string,
    rows: number
}

export interface PublicButton {
    buttonText: string,
    type: 'button' | 'submit' | 'reset',
    theme: 'primary' | 'success' | 'warning' | 'danger',
    customClassList: string[],
    clicked: () => void
}

export type InputTypes =
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';


