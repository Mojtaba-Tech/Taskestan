<template>
	<nav class="fixed w-[270px] h-screen">
		
		<!-- Workspace & Avatar -->
		<BoardLayoutNavigationHeader/>
		<!-- End Workspace & Avatar -->
		
		<!-- Menu Links -->
		<ul class="px-2 h-[calc(100vh-64px)] overflow-y-auto">
			
			<!-- Boards Page Link -->
			<li class="mb-1">
				<NuxtLink
					to="/app/boards/list"
					class="group/svg flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer transition rounded-md text-brand-600"
				>
					<IconsMultipleCard4
						:color="getIconColor('app-boards-list')"
						color-hover="#2C2C2E"
						:width="16"
						class="group-hover/svg:hovered"
					/>
					<span class="text-gray-700 group-hover/svg:text-gray-900 text-13 leading-3 transition ml-2">Boards</span>
				</NuxtLink>
			</li>
			<!-- End Boards Page Link -->
			
			<!-- Boards List -->
			<li
				v-for="(board, index) in boards"
				:key="index"
				class="mb-1"
			>
				<NuxtLink
					:to="`/app/editor/${board.id}`"
					class="group/svg flex items-center pl-2 pr-3 hover:bg-gray-50 cursor-pointer transition rounded-md text-brand-600"
				>
					<span class="text-lg">{{ board.emoji }}</span>
					<span class="text-gray-700 group-hover/svg:text-gray-900 text-13 leading-3 transition ml-2">
						{{ board.title }}
					</span>
				</NuxtLink>
			</li>
			<!-- End Boards List -->
			
			<!-- Settings Page Link -->
			<li class="mt-4 mb-1">
				<NuxtLink
					to="/app/settings"
					class="group/svg flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer transition rounded-md text-brand-600"
				>
					<IconsSetting3
						:color="getIconColor('app-settings')"
						color-hover="#2C2C2E"
						:width="16"
						class="group-hover/svg:hovered"
					/>
					<span class="text-gray-700 group-hover/svg:text-gray-900 text-13 leading-3 transition ml-2">Settings</span>
				</NuxtLink>
			</li>
			<!-- End Settings Page Link -->
			
			<!-- Support Page Link -->
			<li class="mb-1">
				<NuxtLink
					to="/app/support"
					class="group/svg flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer transition rounded-md text-brand-600"
				>
					<IconsHeadphones5
						:color="getIconColor('app-support')"
						color-hover="#2C2C2E"
						:width="16"
						class="group-hover/svg:hovered"
					/>
					<span class="text-gray-700 group-hover/svg:text-gray-900 text-13 leading-3 transition ml-2">Support</span>
				</NuxtLink>
			</li>
			<!-- End Support Page Link -->
			
			<!-- Feedback Page Link -->
			<li class="mb-1">
				<NuxtLink
					to="/app/feedback"
					class="group/svg flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer transition rounded-md text-brand-600"
				>
					<IconsClipboardContent
						:color="getIconColor('app-feedback')"
						color-hover="#2C2C2E"
						:width="16"
						class="group-hover/svg:hovered"
					/>
					<span class="text-gray-700 group-hover/svg:text-gray-900 text-13 leading-3 transition ml-2">Feedback</span>
				</NuxtLink>
			</li>
			<!-- End Feedback Page Link -->
			
		</ul>
		<!-- End Menu Links -->
	
	</nav>
</template>

<script setup lang="ts">
import type {BoardModel} from "~/types/board";

defineProps<{
	boards: BoardModel[],
	isGetBoardsLoading: boolean
}>()

const route = useRoute()

const getIconColor = (routeName: string) => {
	const isRouteMatched = route.matched.some((matchedItem) => matchedItem.name === routeName)

	return isRouteMatched ? '#2C2C2E' : '#6E6F73'
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
	@apply bg-gray-50;
	
	span {
		@apply text-gray-900;
	}
}
</style>