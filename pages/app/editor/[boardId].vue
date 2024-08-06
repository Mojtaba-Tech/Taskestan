<template>
	<div>
		<EditorToolbar/>
		<EditorArea/>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'editor-layout'
})

const boardStore = useBoardStore()
const boardStoreRefs = storeToRefs(boardStore)
const selectedBoardId = boardStoreRefs.selectedBoardId;

selectedBoardId.value = parseInt(useRoute().params.boardId as string);
</script>

<style scoped>

</style>