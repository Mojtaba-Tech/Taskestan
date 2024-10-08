export interface PublicInputModel {
    type: InputTypesModel,
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
    type?: 'button' | 'submit' | 'reset',
    theme?: 'primary' | 'success' | 'warning' | 'danger' | 'light',
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    customClassList?: string[],
    clicked?: () => void
}

export interface PublicColorPickerModel {
    hasLabel?: boolean,
    labelText?: string,
    showAlpha?: boolean,
    customClassList?: string[],
    id?: string,
}

export interface PublicEmojiPickerModel {
    id: string,
    hasLabel: boolean,
    labelText: string
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


