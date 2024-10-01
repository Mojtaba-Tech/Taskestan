export interface PublicInputModel {
    type: InputTypes,
    theme: 'primary',
    customClassList: string[],
    id: string,
    hasLabel: boolean,
    labelText: string,
    placeholder: string
}

export interface PublicTextareaModel {
    theme: 'primary',
    customClassList: string[],
    id: string,
    hasLabel: boolean,
    labelText: string,
    placeholder: string,
    rows: number
}

export interface PublicButtonModel {
    buttonText: string,
    type: 'button' | 'submit' | 'reset',
    theme: 'primary' | 'success' | 'warning' | 'danger',
    customClassList: string[],
    clicked: () => void
}

export interface PublicColorPickerModel {
    hasLabel?: boolean,
    labelText?: string,
    customClassList?: string[],
    id?: string,
}

export type InputTypesModel =
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


