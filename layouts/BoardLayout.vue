<template>
	<div class="bg-gray-50/50">
		
		<!-- Navigation -->
		<BoardLayoutNavigation :boards="boards" :isGetBoardsLoading="isGetBoardsLoading" />
		<!-- End Navigation -->
		
		<!-- Page Content -->
		<main class="pr-1.5 py-1.5 ml-[270px]">
			<section class="rounded-lg bg-white h-[calc(100vh-12px)] overflow-x-auto shadow-4">
				<slot />
			</section>
		</main>
		<!-- End Page Content -->
		
	</div>
</template>

<script setup>
const boardStore = useBoardStore()
const boardStoreRefs = storeToRefs(boardStore)
const boards = boardStoreRefs.boards
const isGetBoardsLoading = boardStoreRefs.isGetBoardsLoading;

onMounted(async () => {
	boardStore.getBoards()
})
</script>