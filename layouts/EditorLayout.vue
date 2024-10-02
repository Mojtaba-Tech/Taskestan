<template>
	<div class="bg-gray-50">
		
		<!-- Navigation -->
		<EditorLayoutNavigation/>
		<!-- End Navigation -->
		
		<!-- Page Content -->
		<main class="px-1.5 pb-1.5">
			<section class="rounded-lg bg-white p-2 min-h-[calc(100vh-44px)] shadow-1 border border-black/10">
				<slot/>
			</section>
		</main>
		<!-- End Page Content -->
		
		<!-- Fixed Action Bar -->
		<EditorFixedActionBar/>
		<!-- End Fixed Action Bar -->
	
	</div>
</template>

<script setup lang="ts">
import type {BoardModel} from "~/types/board";

const route = useRoute()

const boardStore = useBoardStore()
const boardStoreRefs = storeToRefs(boardStore)
const boards = boardStoreRefs.boards;
const editorSelectedBoard = boardStoreRefs.editorSelectedBoard;

// load boards and set selected board in editor
const loadBoards = async () => {
	await boardStore.getBoards()
	
	setEditorSelectedBoard(parseInt(route.params.boardId as string))
}

onMounted(() => {
	loadBoards()
})

const setEditorSelectedBoard = (boardId: number) => {
	editorSelectedBoard.value = boards.value.find((board) => board.id === boardId) as BoardModel
}

watch(
	() => route.params.boardId,
	(newBoardId, oldBoardId) => {
		setEditorSelectedBoard(parseInt(newBoardId as string))
	}
)
</script>