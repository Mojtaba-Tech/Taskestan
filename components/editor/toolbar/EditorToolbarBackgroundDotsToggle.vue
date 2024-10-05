<template>
	<div class="relative z-10 flex justify-between items-center w-14 bg-gray-50 rounded-md transition duration-500 mr-2">
		
		<!-- Active Background -->
		<span
			class="absolute z-0 bg-white w-7 h-7 rounded-md shadow-2 border border-black/20 transition"
			:class="settings.editor.bgPattern === 'dots' ? 'translate-x-[100%]' : 'translate-x-0'"
		></span>
		<!-- End Active Background -->
		
		<!-- Buttons -->
		<div
			@click="changeBgPattern('empty')"
			class="relative z-10 flex justify-center items-center h-7 w-1/2 cursor-pointer"
			:class="{'pointer-events-none': settings.editor.bgPattern === 'empty'}"
		>
			<IconsSquare
				:width="14"
				:height="14"
				:color="settings.editor.bgPattern === 'dots' ? '#848589' : '#2C2C2E'"
				class="transition"
			/>
		</div>
		<div
			@click="changeBgPattern('dots')"
			class="relative z-10 flex justify-center items-center h-7 w-1/2 cursor-pointer"
			:class="{'pointer-events-none': settings.editor.bgPattern === 'dots'}"
		>
			<IconsFillSquare
				:width="14"
				:height="14"
				:color="settings.editor.bgPattern === 'dots' ? '#2C2C2E' : '#848589'"
				class="transition"
			/>
		</div>
		<!-- End Buttons -->
	
	</div>
</template>

<script setup lang="ts">
import type {SettingsModel} from "~/types/settings";

const settingsStore = useSettingsStore()
const settingsStoreRefs = storeToRefs(settingsStore)
const settings = settingsStoreRefs.settings as Ref<SettingsModel>

const changeBgPattern = (bgPattern: 'empty' | 'dots') => {
	settings.value.editor.bgPattern = bgPattern;

	settingsStore.upsertSettings()
}
</script>

<style scoped>

</style>