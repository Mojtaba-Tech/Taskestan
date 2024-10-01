export interface NoteModel {
    id: number,
    board_id: number,
    text: string,
    settings: NoteSettingsModel,
    created_at: string,
}

export interface NoteSettingsModel {
    position: {
        x: number,
        y: number
    },
    color: {
        bg: string,
        text: string
    }
}