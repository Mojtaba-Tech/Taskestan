<template>
	<section
		class="absolute flex flex-col py-4 pl-6 pr-5 rounded-lg w-52 min-h-52 select-none pointer-events-auto"
		:style="{
			top: position.y + 'px',
			left: position.x + 'px',
			background: note.settings.color?.bg || '#999999',
			color: note.settings.color?.text || '#ffffff',
			zIndex
		}"
		@mousedown="startDrag"
		data-element-role="note"
	>
		<p class="font-medium text-sm mb-8 pointer-events-none">
			{{ note.text }}
		</p>
		<img
			src="https://i.pravatar.cc/20"
			class="w-5 h-5 object-cover rounded-full mt-auto ml-auto"
			alt="writer avatar"
		>
	</section>
</template>

<script setup lang="ts">
import {ref, onBeforeUnmount} from 'vue';
import {storeToRefs} from "pinia";
import type {NoteModel, NoteSettingsModel} from "~/types/note";

const props = defineProps<{
	note: NoteModel,
	updateNotePosition: ({noteId, settings}: {noteId: number, settings: NoteSettingsModel}) => void
}>()

let {isDraggingSomething} = storeToRefs(useDragAndDropStore())

// Initial position
const position = ref({
	x: props.note.settings.position.x,
	y: props.note.settings.position.y
});

let offset = {x: 0, y: 0};
let zIndex = ref(1);

const startDrag = (e: MouseEvent) => {
	zIndex.value++;
	isDraggingSomething.value = true;
	offset = {
		x: e.clientX - position.value.x,
		y: e.clientY - position.value.y,
	};
	document.addEventListener('mousemove', drag);
	document.addEventListener('mouseup', stopDrag);
};

const drag = (e: MouseEvent) => {
	position.value = {
		x: (e.clientX - offset.x) < 0 ? 0 : e.clientX - offset.x,
		y: (e.clientY - offset.y) < 0 ? 0 : e.clientY - offset.y,
	};
};

const stopDrag = () => {
	isDraggingSomething.value = false;
	document.removeEventListener('mousemove', drag);
	document.removeEventListener('mouseup', stopDrag);
	
	updateNotePosition()
};

const updateNotePosition = () => {
	const settings = {...props.note.settings}
	settings.position = {x: position.value.x, y: position.value.y}
	props.updateNotePosition({noteId: props.note.id, settings})
}

onBeforeUnmount(() => {
	document.removeEventListener('mousemove', drag);
	document.removeEventListener('mouseup', stopDrag);
});
</script>

<style scoped>

</style>