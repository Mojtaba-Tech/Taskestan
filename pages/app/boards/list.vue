<template>
	<div>
		
			<header class="text-right p-3">
				<PublicButton
					button-text="New Board"
					theme="light"
					size="xs"
					:clicked="() => isBoardCreateModalVisible = true"
				/>
			</header>
			
			<section class="pt-20 pb-8 px-[264px]">
				
				<!-- Header -->
				<header class="mb-6">
					<h1 class="text-gray-900 text-xl mb-1">Boards</h1>
					<p class="text-13 text-gray-500">
						You can find a comprehensive collection of all the Boards in this section.
						<span>Last modified 2 mins ago</span>
					</p>
				</header>
				<!-- End Header -->
				
				<!-- Search Boards -->
				<section class="mb-11">
					
					<!-- Search Input -->
					<div class="relative">
						<IconsSearch
							class="absolute top-1/2 -translate-y-1/2 ml-3.5"
							color="#424245"
						/>
						<input
							type="search"
							class="w-full py-2 pl-10 pr-2 outline-none border border-darkgray-100/60 rounded-md transition focus:bg-gray-50/60"
							placeholder="Search boards"
						/>
					</div>
					<!-- End Search Input -->
					
				</section>
				<!-- End Search Boards -->
				
				<!-- Board Items -->
				<section class="flex flex-wrap justify-start -mx-1.5">
					<template
						v-if="!isGetBoardsLoading"
						v-for="(board, index) in boards"
					>
						<div class="flex flex-col justify-end w-[calc((100%/3)-12px)] mx-1.5 mb-4">
							<NuxtLink
								:to="{name: 'app-editor-boardId', params: {boardId: board.id}}"
								class="flex flex-col justify-between bg-white hover:bg-gray-100/20 transition rounded-md h-32 p-4 shadow-4 mb-2 cursor-pointer"
							>
								<span class="text-3xl">{{ board.emoji }}</span>
								<h2 class="text-sm text-gray-900">{{ board.title }}</h2>
							</NuxtLink>
							<p class="text-xs text-gray-300 ml-4">Created {{ $dayjs(board.created_at).fromNow() }}</p>
						</div>
					</template>
					
					<!-- Loading -->
					<template v-else>
						<div class="flex flex-col justify-end w-[calc((100%/3)-12px)] mb-4 bg-white/80 rounded-medium h-32 p-4 shadow-4">
							<Vue3Lottie
								:animationLink="loadingJsonURL"
								:width="208"
								:height="256"
							/>
						</div>
					</template>
					<!-- End Loading -->
					
				</section>
				<!-- End Board Items -->
			
			</section>
			
			<!-- Board Create Modal -->
			<BoardCreateModal
				v-model:is-board-create-visible="isBoardCreateModalVisible"
			/>
			<!-- End Board Create Modal -->
		
	</div>
</template>

<script setup lang="ts">
import {Vue3Lottie} from "vue3-lottie";

definePageMeta({
	layout: 'board-layout',
})

const isBoardCreateModalVisible = ref(false)

const loadingJsonURL = new URL('~/assets/lottie/loading.json', import.meta.url)?.href

const boardStore = useBoardStore()
const boardStoreRefs = storeToRefs(boardStore)
const boards = boardStoreRefs.boards
const isGetBoardsLoading = boardStoreRefs.isGetBoardsLoading;
</script>