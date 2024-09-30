<template>
	<div class="relative z-10 flex justify-between items-center w-14 bg-gray-50 rounded-md transition duration-500 mr-2">
		
		<!-- Active Background -->
		<span
			class="absolute z-0 bg-white w-7 h-7 rounded-md shadow-2 border border-black/20 transition"
			:class="isEditorBgDotsActive ? 'translate-x-[100%]' : 'translate-x-0'"
		></span>
		<!-- End Active Background -->
		
		<!-- Buttons -->
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
		<!-- End Buttons -->
	
	</div>
</template>

<script setup lang="ts">
const settingsStore = useSettingsStore()
const settingsStoreRefs = storeToRefs(settingsStore)
const isEditorBgDotsActive = settingsStoreRefs.isEditorBgDotsActive
</script>

<style scoped>

</style>