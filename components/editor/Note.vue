<template>
	<section
		class="absolute flex flex-col py-4 pl-6 pr-5 rounded-lg w-52 min-h-52 select-none pointer-events-auto"
		:style="{ top: position.y + 'px', left: position.x + 'px', background, zIndex: zIndex }"
		@mousedown="startDrag"
		data-element-role="note"
	>
		<!--:style="{top, left, background}"-->
		<p class="text-black/75 font-medium text-sm mb-8 pointer-events-none">
			{{ text }}
			
			<span class="flex mt-3">x-> {{ position.x }}</span>
			<span class="flex mt-3">y-> {{ position.y }}</span>
			{{isDraggingSomething}}
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

const props = defineProps<{
	y: number,
	x: number,
	background: string,
	text: string
}>()

let {isDraggingSomething} = storeToRefs(useDragAndDropStore())

const position = ref({x: props.x, y: props.y}); // Initial position
let offset = {x: 0, y: 0};
let zIndex = ref(1);

const startDrag = (e: MouseEvent) => {
	console.log("startDrag", e.target);
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
};

onBeforeUnmount(() => {
	document.removeEventListener('mousemove', drag);
	document.removeEventListener('mouseup', stopDrag);
});
</script>

<style scoped>

</style>