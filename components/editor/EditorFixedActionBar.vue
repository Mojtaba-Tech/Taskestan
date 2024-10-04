<template>
	<div>
		
		<!-- Fixed Action Bar -->
		<section class="fixed bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-16 z-50 bg-white rounded-xl shadow-3 border border-black/25">
			<ul class="flex items-center w-full h-full px-8">
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
</script>

<style scoped>

</style>