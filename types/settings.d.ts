export interface SettingsModel {
  editor: EditorSettingsModel
}

export interface EditorSettingsModel {
  bgPattern: EditorBgPatternsModel,
  bgColor: string
}

export type EditorBgPatternsModel = 'empty' | 'dots'