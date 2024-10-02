<template>
	<section>
		<!--<TransitionGroup name="scale-up">-->
			<EditorNoteItem
				v-if="(!isGetNotesLoading || !isCreateNoteLoading)"
				v-for="(note, index) in notes"
				:index="index"
				:note="note"
				:updateNotePosition="noteStore.updateNotePosition"
			/>
		<!--</TransitionGroup>-->
	</section>
</template>

<script setup lang="ts">
const route = useRoute()

const noteStore = useNoteStore()
const noteStoreRefs = storeToRefs(noteStore)
const notes = noteStoreRefs.notes;
const isGetNotesLoading = noteStoreRefs.isGetNotesLoading
const isCreateNoteLoading = noteStoreRefs.isCreateNoteLoading

const boardStore = useBoardStore()
const boardStoreRefs = storeToRefs(boardStore)
const isChangeBoardLoading = boardStoreRefs.isChangeBoardLoading

const loadNotes = async () => {
	notes.value = []
	
	await noteStore.getNotes(route.params.boardId as string)
	
	isChangeBoardLoading.value = false;
}

onBeforeMount(loadNotes)
</script>

<style scoped>

</style>