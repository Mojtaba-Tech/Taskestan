<template>
	<div>
		
		<!-- Fixed Action Bar -->
		<section class="fixed bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-16 z-50 bg-white rounded-xl shadow-3 border border-black/25 hover:bg-gray-50/95 transition">
			<div class="flex justify-between items-center pl-8 pr-6 h-full">
				
				<!-- Left Side Actions -->
				<ul class="flex items-center w-full h-full">
					<li class="group/svg mr-5">
						<IconsMove2
							class="cursor-pointer group-hover/svg:hovered"
							color-hover="#44AAFF"
						/>
					</li>
					<li
						@click="isTaskListCreateModalVisible = true;"
						class="group/svg mr-5"
					>
						<IconsPallete2
							class="cursor-pointer group-hover/svg:hovered"
							color-hover="#44AAFF"
						/>
					</li>
					<li
						@click="isNoteCreateModalVisible = true;"
						class="group/svg mr-5"
					>
						<IconsRight
							class="cursor-pointer group-hover/svg:hovered"
							color-hover="#44AAFF"
						/>
					</li>
				</ul>
				<!-- End Left Side Actions -->
				
				<!-- Right Side -->
				<div>
					<label class="relative">
						<input
							v-model="settings.editor.bgColor"
							type="color"
							@blur="colorPickerBlurred"
							@input="isBgColorChanged = true"
							class="absolute left-0 top-0 w-6 h-6 opacity-0 -z-10"
						>
						<img
							src="@/assets/images/change-background-icon.png"
							class="w-6 h-6 cursor-pointer hover:saturate-150 transition"
							alt="change background icon"
						/>
					</label>
				</div>
				<!-- End Right Side -->
				
			</div>
		</section>
		<!-- End Fixed Action Bar -->
		
		<!-- Modals -->
		<EditorNoteCreateModal v-model:is-note-create-modal-visible="isNoteCreateModalVisible" />
		<EditorTaskListCreateModal v-model:is-task-list-create-modal-visible="isTaskListCreateModalVisible" />
		<!-- End Modals -->
		
	</div>
</template>

<script setup lang="ts">
const isNoteCreateModalVisible = ref(false)
const isTaskListCreateModalVisible = ref(false)

const isBgColorChanged = ref(false)

// settings store
const settingsStore = useSettingsStore()
const settingsStoreRefs = storeToRefs(settingsStore)
const settings = settingsStoreRefs.settings;

const colorPickerBlurred = () => {
	if(!isBgColorChanged.value) return; // update database if bgColor has been changed
	
	settingsStore.upsertSettings()
	isBgColorChanged.value = false; // reset
}
</script>

<style scoped>

</style>