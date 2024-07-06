<template>
	<div>
			<section class="flex flex-wrap">
				
				<!-- Add New Board Button -->
				<div
					class="flex justify-center items-center text-slate-600 hover:bg-slate-600 hover:text-white transition cursor-pointer rounded-medium w-[calc((100%/5)-16px)] h-64 p-4 border-4 border-slate-600/80 mb-3 mx-2"
					@click="isBoardAddModalVisible = true"
				>
					<div class="text-center">
						<font-awesome :icon="faPlus" size="2x"/>
						<h3 class="mt-2 text-xl">Add new board</h3>
					</div>
				</div>
				<!-- End Add New Board Button -->
				
				<!-- Boards -->
				<!-- Board Items -->
				<template v-for="(board, index) in boards" v-if="!isLoadingBoards">
					<div class="flex items-end bg-white/80 hover:bg-gray-100 transition rounded-medium w-[calc((100%/5)-16px)] h-64 p-4 border border-gray-300 mb-3 mx-2">
						<h2 class="text-sm">{{ board.title }}</h2>
					</div>
				</template>
				<!-- End Board Items -->
				
				<!-- Loading -->
				<template v-else>
					<div class="flex items-center bg-white/80 rounded-medium w-[calc((100%/5)-16px)] h-64 p-4 border-t-8 border-2 border-slate-600/80 mb-3 mx-2">
						<Vue3Lottie
							:animationLink="loadingJsonURL"
							:width="208"
							:height="256"
						/>
					</div>
				</template>
				<!-- End Loading -->
				<!-- End Boards -->
			
			</section>
			
			<!-- Board Add Modal -->
			<BoardAdd
				v-model:is-visible="isBoardAddModalVisible"
			/>
			<!-- End Board Add Modal -->
		
	</div>
</template>

<script setup lang="ts">
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {Vue3Lottie} from "vue3-lottie";
import type {BoardModel} from "~/types/board";

definePageMeta({
	layout: 'board-layout',
})

const loadingJsonURL = new URL('~/assets/lottie/loading.json', import.meta.url)?.href
const {isLoadingBoards} = storeToRefs(useBoardStore())
const isBoardAddModalVisible = ref(false)

const boards: Ref<BoardModel[]> = ref([])
onMounted(async () => {
	isLoadingBoards.value = true;
	boards.value = await $fetch('/api/boards', {method: "GET"})
	isLoadingBoards.value = false;
})

// todo: should be added in login page
// const supabase = useSupabaseClient()
// const signInWithOAuth = async () => {
// 	const {error} = await supabase.auth.signInWithOAuth({
// 		provider: 'github',
// 		options: {
// 			redirectTo: 'http://localhost:3005/confirm',
// 		},
// 	})
// 	if (error) console.log(error)
// }
// signInWithOAuth()
</script>