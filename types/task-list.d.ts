export interface TaskListModel {
  id: number,
  board_id: number,
  title: string,
  settings: TaskListSettingsModel,
  created_at: string
}

export interface TaskListSettingsModel {
  position: {
    x: number,
    y: number
  }
}