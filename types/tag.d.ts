export interface TagModel {
  text: string,
  theme?: 'cyan' | 'orange' | 'red' | 'green',
  customClassList?: string[],
}