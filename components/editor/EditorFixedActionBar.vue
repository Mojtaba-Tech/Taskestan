<template>
	<div>
		
		<!-- Fixed Action Bar -->
		<section class="fixed bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-16 z-50 bg-white rounded-xl shadow-3 border border-black/25">
			<div class="flex justify-between items-center pl-8 pr-6 h-full">
				
				<!-- Left Side Actions -->
				<ul class="flex items-center w-full h-full">
					<li class="mr-5">
						<IconsMove2
							class="cursor-pointer"
						/>
					</li>
					<li
						@click="isTaskListCreateModalVisible = true;"
						class="mr-5"
					>
						<IconsPallete2
							class="cursor-pointer"
						/>
					</li>
					<li
						@click="isNoteCreateModalVisible = true;"
						class="mr-5"
					>
						<IconsRight
							class="cursor-pointer"
						/>
					</li>
				</ul>
				<!-- End Left Side Actions -->
				
				<!-- Right Side -->
				<div>
					<PublicColorPicker
						v-model="settings.editor.bgColor"
						show-alpha
						:has-label="false"
						@on-blur="settingsStore.upsertSettings()"
					>
						<template v-slot:default="{showColorPicker}" >
							<img
								@click="showColorPicker()"
								src="@/assets/images/change-background-icon.png"
								class="w-6 h-6 cursor-pointer hover:saturate-150 transition"
								alt="change background icon"
							/>
						</template>
					</PublicColorPicker>
				
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

// settings store
const settingsStore = useSettingsStore()
const settingsStoreRefs = storeToRefs(settingsStore)
const settings = settingsStoreRefs.settings;
</script>

<style scoped>

</style>