<template>
	<nav class="flex justify-center items-center h-9">
		
		<!-- Select Board -->
		<div class="custom-select">
			<select
				v-model="selectedBoardId"
				class="bg-transparent border-none outline-none appearance-none"
			>
				<option
					v-for="(board, index) in boards"
					:key="index"
					:value="board.id"
				>{{board.title}}</option>
			</select>
		</div>
		<!-- End Select Board -->
		
	</nav>
</template>

<script setup lang="ts">
const boardStore = useBoardStore()
const boardStoreRefs = storeToRefs(boardStore)
const boards = boardStoreRefs.boards
const selectedBoardId = boardStoreRefs.selectedBoardId

const loadBoards = async () => {
	if(!boards.value.length)
		await boardStore.getBoards()
}


onMounted(() => {
	loadBoards()
})
</script>

<style lang="scss" scoped>

</style>