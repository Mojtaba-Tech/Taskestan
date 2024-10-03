<template>
	<nav class="flex justify-center items-center h-9">
		
		<!-- Board Title (When We Have Just One Board) -->
		<div
			v-if="boards.length === 1"
			class="text-gray-700 text-13"
		>
			{{editorSelectedBoard?.title || 'Load Boards'}}
		</div>
		<!-- End Board Title (When We Have Just One Board) -->

		<!-- Select Board -->
		<el-dropdown
			v-else
			ref="boardListDropdown"
			trigger="click"
			popper-class="no-arrow custom-popper-2"
			class="custom-dropdown-2"
			:disabled="!boards.length"
		>
			
			<!-- Dropdown Trigger -->
			<div class="flex items-center select-none">
				<div class="text-gray-700 text-13 mr-4">
					{{editorSelectedBoard?.title || 'Load Boards'}}
				</div>
				<IconsArrowDown color="#58585C"/>
			</div>
			<!-- End Dropdown Trigger -->
			
			<!-- Dropdown Menu -->
			<template #dropdown>
				<ul class="p-2">
					<li
						v-for="(board, index) in notSelectedBoards"
						:key="index"
						:value="board.id"
						@click="changeBoard(board)"
					>
						<div class="group/svg flex items-center px-2 py-1.5 hover:bg-gray-50 cursor-pointer transition rounded-md text-brand-600">
							<IconsMultipleCard4
								color="#6E6F73" color-hover="#2C2C2E" :width="12"
								class="group-hover/svg:hovered"
							/>
							<span class="text-gray-900 text-13 ml-2">{{ board.title }}</span>
						</div>
					</li>
				</ul>
			</template>
			<!-- End Dropdown Menu -->
			
		</el-dropdown>
		<!-- End Select Board -->
		
	</nav>
</template>

<script setup lang="ts">
import type {BoardModel} from "~/types/board";
import type {DropdownInstance} from "element-plus";

const route = useRoute()
const router = useRouter()

const boardListDropdown = ref<DropdownInstance>()

const boardStore = useBoardStore()
const boardStoreRefs = storeToRefs(boardStore)
const boards = boardStoreRefs.boards
const editorSelectedBoard = boardStoreRefs.editorSelectedBoard

const changeBoard = (board: BoardModel) => {
	if(parseInt(route.params.boardId as string) !== board.id) {
		boardListDropdown.value?.handleClose()
		
		router.push(`/app/editor/${board.id}`)
	}
}

const notSelectedBoards = computed(() => {
	return boards.value.filter((board) => {
		return board.id !== editorSelectedBoard.value?.id
	})
})
</script>

<style scoped>
svg {
	transition: all 0.4s;
}

.el-tooltip__trigger[aria-expanded="true"] svg {
	transform: rotate3d(1, 0, 0, 180deg);
}
</style>