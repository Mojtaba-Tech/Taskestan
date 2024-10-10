import type {TaskModel} from "~/types/task";

export interface TaskListModel {
  id: number,
  board_id: number,
  title: string,
  settings: TaskListSettingsModel,
  created_at: string,
  tasks: TaskModel[]
}

export interface TaskListSettingsModel {
  position: {
    x: number,
    y: number
  }
  zIndex: number
}