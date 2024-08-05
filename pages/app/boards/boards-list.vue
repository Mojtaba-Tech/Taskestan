<template>
	<div>
			<section class="flex flex-wrap">
				
				<!-- Add New Board Button -->
				<div
					class="flex justify-center items-center text-slate-600 hover:bg-slate-600 hover:text-white transition cursor-pointer rounded-medium w-[calc((100%/5)-16px)] h-64 p-4 border-4 border-slate-600/80 mb-3 mr-4"
					@click="isBoardCreateModalVisible = true"
				>
					<div class="text-center">
						<font-awesome :icon="faPlus" size="2x"/>
						<h3 class="mt-2 text-xl">Add new board</h3>
					</div>
				</div>
				<!-- End Add New Board Button -->
				
				<!-- Board Items -->
				<template v-for="(board, index) in boards" v-if="!isGetBoardsLoading">
					<div class="flex flex-col justify-end bg-white/80 hover:bg-gray-100 transition rounded-medium w-[calc((100%/5)-16px)] h-64 p-4 border border-gray-300 mb-3 mr-4 cursor-pointer">
						<h2 class="text-sm text-gray-600">{{ board.title }}</h2>
						<p
							v-if="board.updated_at"
							class="text-gray-400"
						>Last modified {{$dayjs(board.updated_at).fromNow()}}</p>
					</div>
				</template>
				<!-- End Board Items -->
				
				<!-- Loading -->
				<template v-else>
					<div class="flex items-center bg-white/80 rounded-medium w-[calc((100%/5)-16px)] h-64 p-4 border border-gray-300 mb-3 mr-4 cursor-pointer">
						<Vue3Lottie
							:animationLink="loadingJsonURL"
							:width="208"
							:height="256"
						/>
					</div>
				</template>
				<!-- End Loading -->
			
			</section>
			
			<!-- Board Create Modal -->
			<BoardCreateModal
				v-model:is-board-create-visible="isBoardCreateModalVisible"
			/>
			<!-- End Board Create Modal -->
		
	</div>
</template>

<script setup lang="ts">
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {Vue3Lottie} from "vue3-lottie";
import type {BoardModel} from "~/types/board";

definePageMeta({
	layout: 'board-layout',
})

const isBoardCreateModalVisible = ref(false)

const loadingJsonURL = new URL('~/assets/lottie/loading.json', import.meta.url)?.href

const boardStore = useBoardStore()
const boardStoreRefs = storeToRefs(boardStore)
const boards = boardStoreRefs.boards
const isGetBoardsLoading = boardStoreRefs.isGetBoardsLoading;

onMounted(async () => {
	boardStore.getBoards()
	// isGetBoardsLoading.value = true;
	// boards.value = await $fetch('/api/boards', {method: "GET"})
	// isGetBoardsLoading.value = false;
})
</script>