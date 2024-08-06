import type {BoardModel} from "~/types/board";
import type {TablesInsert} from "~/types/database.types";

export const useBoardStore = defineStore('boards', () => {
  const boards = ref<BoardModel[]>([])
  const isGetBoardsLoading = ref(false)
  const isCreateBoardLoading = ref(false)
  const selectedBoardId = ref<number>(0)

  const getBoards = () => {
    isGetBoardsLoading.value = true;

    return $fetch('/api/boards', {method: "GET"})
      .then((response) => {
        boards.value = <BoardModel[]>response;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        isGetBoardsLoading.value = false;
      })
  }

  const createBoard = (requestBody: Partial<TablesInsert<'boards'>>) => {
    isCreateBoardLoading.value = true;

    return $fetch('/api/boards', {method: "POST", body: requestBody})
      .then((response: any) => {
        // console.log("response", response.data)

        boards.value.push(response.data[0])
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        isCreateBoardLoading.value = false;
      })
  }

  return {
    boards,
    getBoards,
    createBoard,
    selectedBoardId,
    isGetBoardsLoading
  }
})
