export const useBoardsStore = defineStore('boards', () => {
    const isLoadingBoards = ref(false)

    return {
        isLoadingBoards
    }
})
