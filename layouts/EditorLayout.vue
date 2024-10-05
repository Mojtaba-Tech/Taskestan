<template>
	<div class="bg-gray-50">
		
		<!-- Navigation -->
		<EditorLayoutNavigation/>
		<!-- End Navigation -->
		
		<!-- Page Content -->
		<main class="px-1.5 pb-1.5">
			<section
				class="rounded-lg bg-white p-2 min-h-[calc(100vh-44px)] shadow-1 border border-black/10"
				:style="{backgroundColor: settings.editor.bgColor ? `${settings.editor.bgColor} !important` : ''}"
			>
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

// board store
const boardStore = useBoardStore()
const boardStoreRefs = storeToRefs(boardStore)
const boards = boardStoreRefs.boards;
const editorSelectedBoard = boardStoreRefs.editorSelectedBoard;

// settings store
const settingsStore = useSettingsStore()
const settingsStoreRefs = storeToRefs(settingsStore)
const settings = settingsStoreRefs.settings;

// load boards and set selected board in editor
const loadBoards = async () => {
	await boardStore.getBoards()
	
	setEditorSelectedBoard(parseInt(route.params.boardId as string))
}

const setEditorSelectedBoard = (boardId: number) => {
	editorSelectedBoard.value = boards.value.find((board) => board.id === boardId) as BoardModel
}

onMounted(loadBoards)

watch(
	() => route.params.boardId,
	(newBoardId) => {
		setEditorSelectedBoard(parseInt(newBoardId as string))
	}
)
</script>