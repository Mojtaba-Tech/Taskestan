<template>
	<header class="flex justify-between w-full px-3 mt-3 mb-6">
		
		<!-- Workspace -->
		<div>
			<el-dropdown
				trigger="click"
				placement="bottom-start"
				popper-class="no-arrow custom-popper-1 !top-12"
			>
				<button
					class="flex items-center justify-between bg-white w-12 h-7 rounded-md px-1.5 shadow-4 outline-none"
				>
					<img
						src="/icon.png"
						class="w-4 h-4"
						alt="editor dropdown icon"
					/>
					<IconsArrowDown color="#58585C"/>
				</button>
				<template #dropdown>
					<ul class="p-1">
						<li>
							<NuxtLink
								to="/app/boards/list"
								class="group/svg flex items-center px-1.5 py-1 hover:bg-violet-50 cursor-pointer transition rounded-md text-brand-600"
							>
								<span class="text-gray-900 text-13">Mojtaba Workspace</span>
							</NuxtLink>
						</li>
					</ul>
				</template>
			</el-dropdown>
		</div>
		<!-- End Workspace -->
		
		<!-- Avatar -->
		<PublicAvatar
			text="M"
			text-color="#161617"
			bg-color="#BBDEFF"
			width="28px"
			height="28px"
		/>
		<!-- End Avatar -->
	
	</header>
</template>

<script setup lang="ts">

</script>

<style scoped>
svg {
	transition: all 0.4s;
}

button[aria-expanded="true"] svg {
	transform: rotate3d(1, 0, 0, 180deg);
}
</style>