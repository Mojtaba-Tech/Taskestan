export interface BoardModel {
    id: number,
    title: string,
    brief: string,
    description: string,
    order: number,
    owner_id: string,
    settings: object | null,
    created_at: string,
    updated_at: string,
}