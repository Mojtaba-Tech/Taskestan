<template>
	<div>
		<header>
			<h1 class="text-white bg-stone-800/70 border-l-[10px] border-4 border-stone-800 rounded-large p-4">Your Boards</h1>
		</header>
		
		<section class="flex flex-wrap py-10">
			
			<!-- Add New Board Button -->
			<div
			  class="flex justify-center items-center bg-white/90 hover:bg-white transition cursor-pointer rounded-medium w-[calc((100%/3)-16px)] h-56 p-4 border-4 border-slate-600/80 mb-3 mx-2"
			  @click="isBoardAddModalVisible = true"
			>
				<div class="text-center text-slate-600/90">
					<font-awesome :icon="faPlus" size="3x"/>
					<h3 class="mt-2">Add new board</h3>
				</div>
			</div>
			<!-- End Add New Board Button -->
			
			<!-- Boards -->
			<!-- Board Items -->
			<template v-for="(board, index) in boards" v-if="!isLoadingBoards">
				<div class="bg-white/80 hover:bg-white transition rounded-medium w-[calc((100%/3)-16px)] h-56 p-4 border-t-8 border-2 border-slate-600/80 mb-3 mx-2">
					<h2 class="mb-3">{{ board.title }}</h2>
					<p>{{ board.brief }}</p>
				</div>
			</template>
			<!-- End Board Items -->
			
			<!-- Loading -->
			<template v-else>
				<div class="flex items-center bg-white/80 rounded-medium w-[calc((100%/3)-16px)] h-56 p-4 border-t-8 border-2 border-slate-600/80 mb-3 mx-2">
					<Vue3Lottie
					  :animationLink="loadingJsonURL"
					  :width="300"
					  :height="300"
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

<script setup>
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {Vue3Lottie} from "vue3-lottie";

const loadingJsonURL = new URL('~/assets/lottie/loading.json', import.meta.url)?.href
const {isLoadingBoards} = storeToRefs(useBoardsStore())
const isBoardAddModalVisible = ref(false)

const boards = ref([])
onMounted(async () => {
	isLoadingBoards.value = true;
	boards.value = await $fetch('/api/boards', {method: "GET"})
	isLoadingBoards.value = false;
})

// todo: should be added in login page
// const signInWithOAuth = async () => {
// 	const {error} = await supabase.auth.signInWithOAuth({
// 		provider: 'github',
// 		options: {
// 			redirectTo: 'http://localhost:3005/confirm',
// 		},
// 	})
// 	if (error) console.log(error)
// }
</script>