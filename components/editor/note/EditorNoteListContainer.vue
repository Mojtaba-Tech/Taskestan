<template>
	<section>
		<TransitionGroup name="scale-up">
			<EditorNoteItem
				v-if="!isGetNotesLoading || !isCreateNoteLoading"
				v-for="(note, index) in notes"
				:note="note"
				:updateNotePosition="noteStore.updateNotePosition"
			/>
		</TransitionGroup>
	</section>
</template>

<script setup lang="ts">
const route = useRoute()

const noteStore = useNoteStore()
const noteStoreRefs = storeToRefs(noteStore)
const notes = noteStoreRefs.notes;
const isGetNotesLoading = noteStoreRefs.isGetNotesLoading
const isCreateNoteLoading = noteStoreRefs.isCreateNoteLoading

const loadNotes = () => {
	noteStore.getNotes(route.params.boardId as string)
}

onBeforeMount(loadNotes)
</script>

<style scoped>

</style>