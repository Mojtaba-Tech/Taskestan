import type {NoteModel} from "~/types/note";
import type {TablesInsert} from "~/types/database.types";

export const useNoteStore = defineStore('notes', () => {
  const notes = ref<NoteModel[]>([])
  const isGetNotesLoading = ref(false)
  const isCreateNoteLoading = ref(false)

  const getNotes = (boardId: string) => {
    isGetNotesLoading.value = true;

    return $fetch('/api/notes', {method: 'GET', query: {boardId}})
      .then((response) => {
        notes.value = <NoteModel[]>response;
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        isGetNotesLoading.value = false
      })
  }

  const createNote = (requestBody: TablesInsert<'notes'>) => {
    isCreateNoteLoading.value = true
    console.log("--->", requestBody)

    return $fetch('/api/notes', {method: "POST", body: requestBody})
      .then((response: any) => {
        notes.value.push(response.data[0])
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        isCreateNoteLoading.value = false;
      })
  }

  return {
    notes,
    isGetNotesLoading,
    isCreateNoteLoading,
    getNotes,
    createNote
  }
})