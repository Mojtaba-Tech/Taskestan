<template>
	<section>
		<TransitionGroup name="scale-up">
			<EditorNoteItem
				v-if="!isGetNotesLoading || !isCreateNoteLoading"
				v-for="(note, index) in notes"
				:text="note.text as string"
				:x="note.settings.position.x"
				:y="note.settings.position.y"
				:bgColor="note.settings.color.bg || '#999999'"
				:textColor="note.settings.color.text || '#ffffff'"
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

// todo: it should be dynamic from database
// const notes = [
// 	{id: 1, x: 300, y: 150, color: '#EF80A8BF', text: 'Embrace what makes you different and let it be your superpower.'},
// 	{id: 2, x: 700, y: 200, color: '#EFD080BF', text: 'Embrace what makes you different and let it be your superpower Embrace what makes you different and let it be your superpower.'},
// 	{id: 3, x: 1000, y: 50, color: '#77D080BF', text: 'Embrace what makes you different and let it be what makes you different and let it be your superpower.'},
// ]

const loadNotes = () => {
	noteStore.getNotes(route.params.boardId as string)
}

onBeforeMount(loadNotes)
</script>

<style scoped>

</style>