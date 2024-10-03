export interface CategoryModel {
  id: number,
  board_id: number,
  title: string,
  settings: CategorySettingsModel,
  created_at: string
}

export interface CategorySettingsModel {
  position: {
    x: number,
    y: number
  }
}