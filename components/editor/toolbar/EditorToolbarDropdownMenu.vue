<template>
	<div>
		<el-dropdown
			trigger="click"
			placement="bottom-end"
			popper-class="no-arrow custom-popper-1"
		>
			<button
				class="flex items-center justify-between bg-white border border-blue-600 w-12 h-7 rounded-md px-1.5 shadow-2 outline-none"
			>
				<img
					src="@/assets/images/editor-default-avatar-icon.png"
					class="w-4 h-4"
					alt="editor dropdown icon"
				/>
				<IconsArrowDown color="#58585C"/>
			</button>
			<template #dropdown>
				<ul class="p-2">
					<li>
						<NuxtLink
							to="/app/boards/list"
							class="group/svg flex items-center px-2 py-1.5 hover:bg-gray-50 cursor-pointer transition rounded-md text-brand-600"
						>
							<IconsMultipleCard4
								color="#6E6F73" color-hover="#2C2C2E" :width="12"
								class="group-hover/svg:hovered"
							/>
							<span class="text-gray-900 text-13 ml-2">Boards</span>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink
							to="/app/feedback"
							class="group/svg flex items-center px-2 py-1.5 hover:bg-gray-50 cursor-pointer transition rounded-md text-brand-600"
						>
							<IconsChat color="#6E6F73" color-hover="#2C2C2E" class="group-hover/svg:hovered"/>
							<span class="text-gray-900 text-13 ml-2">Feedback</span>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink
							to="/app/settings"
							class="group/svg flex items-center px-2 py-1.5 hover:bg-gray-50 cursor-pointer transition rounded-md text-brand-600"
						>
							<IconsSetting3
								color="#6E6F73" color-hover="#2C2C2E" :width="12"
								class="group-hover/svg:hovered"
							/>
							<span class="text-gray-900 text-13 ml-2">Setting</span>
						</NuxtLink>
					</li>
					<li
						@click="logout"
						class="group/svg flex items-center px-2 py-1.5 hover:bg-error-50 mt-1.5 cursor-pointer transition rounded-md text-brand-600"
					>
						<IconsLogout
							color="#DE3333" color-hover="#DE3333" :width="12"
							class="group-hover/svg:hovered"
						/>
						<span class="text-gray-900 text-13 ml-2">Logout</span>
					</li>
				</ul>
			</template>
		</el-dropdown>
	</div>
</template>

<script setup lang="ts">
const router = useRouter()
const supabase = useSupabaseClient()

const logout = async () => {
	await supabase.auth.signOut()
	router.push('/auth/login')
}
</script>

<style scoped>
svg {
	transition: all 0.4s;
}

button[aria-expanded="true"] svg {
	transform: rotate3d(1, 0, 0, 180deg);
}
</style>