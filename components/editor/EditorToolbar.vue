<template>
	<section class="flex justify-between items-center pb-4 select-none">
		
		<!-- Manage Board Pages -->
		<section class="flex items-center">
			
			<!-- Pages List -->
			<ul class="flex items-center">
				<li class="rounded-md border border-black/20 mr-2 cursor-pointer text-xs px-2 py-1 text-gray-700 hover:bg-gray-50 transition">
					Page one
				</li>
				<li class="rounded-md border border-black/20 mr-2 cursor-pointer text-xs px-2 py-1 text-gray-700 hover:bg-gray-50 transition">
					Page two
				</li>
				<li class="rounded-md border border-black/20 mr-2 cursor-pointer text-xs px-2 py-1 text-gray-700 hover:bg-gray-50 transition">
					Page three
				</li>
			</ul>
			<!-- End Pages List -->
			
			<!-- Add New Page Icon -->
			<IconsPlus
				color="#9A9BA0"
				class="transition cursor-pointer"
			/>
			<!-- End Add New Page Icon -->
		
		</section>
		<!-- End Manage Board Pages -->
		
		<!-- Theme Settings -->
		<section>
			
			<!-- Editor Background Dots Toggle -->
			<div class="relative z-10 flex justify-between items-center w-14 bg-gray-50 rounded-md transition duration-500">
				
				<!-- Active Background -->
				<span
					class="absolute z-0 bg-white w-7 h-7 rounded-md shadow-2 border border-black/20 transition"
					:class="isEditorBgDotsActive ? 'translate-x-[100%]' : 'translate-x-0'"
				></span>
				<!-- End Active Background -->
				
				<div
					class="relative z-10 flex justify-center items-center h-7 w-1/2 cursor-pointer"
					@click="isEditorBgDotsActive = false;"
				>
					<IconsSquare
						:width="14"
						:height="14"
						:color="isEditorBgDotsActive ? '#848589' : '#2C2C2E'"
						class="transition"
					/>
				</div>
				<div
					class="relative z-10 flex justify-center items-center h-7 w-1/2 cursor-pointer"
					@click="isEditorBgDotsActive = true;"
				>
					<IconsFillSquare
						:width="14"
						:height="14"
						:color="isEditorBgDotsActive ? '#2C2C2E' : '#848589'"
						class="transition"
					/>
				</div>
				
			</div>
			<!-- End Editor Background Dots Toggle -->
		
		</section>
		<!-- End Theme Settings -->
	
	</section>
</template>

<script setup lang="ts">
const settingsStore = useSettingsStore()
const settingsStoreRefs = storeToRefs(settingsStore)
const isEditorBgDotsActive = settingsStoreRefs.isEditorBgDotsActive
</script>

<style scoped>

</style>