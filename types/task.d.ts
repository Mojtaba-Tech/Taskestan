export interface TaskModel {
  id: number,
  taskList_id: number,
  title: string,
  description: string,
  checklists: ChecklistModel[],
  priority: TaskPriorityModel,
  order: number,
  settings: TaskSettingsModel,
  created_at: string,
  updated_at: string,
}

export enum TaskPriorityModel {
  1 = 'Highest',
  2 = 'Critical',
  3 = 'High',
  4 = 'Medium',
  5 = 'Low'
}

export interface TaskSettingsModel {
  width: string,
  height: string,
}