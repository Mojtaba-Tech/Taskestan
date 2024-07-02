export const useBoardStore = defineStore('boards', () => {
    const isLoadingBoards = ref(false)

    return {
        isLoadingBoards
    }
})
