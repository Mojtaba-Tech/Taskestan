<template>
	<div
		id="box"
		:style="{ top: position.y + 'px', left: position.x + 'px' }"
		@mousedown="startDrag"
	></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const position = ref({ x: 100, y: 100 }); // Initial position
let offset = { x: 0, y: 0 };
let isDragging = false;

const startDrag = (e) => {
	isDragging = true;
	offset = {
		x: e.clientX - position.value.x,
		y: e.clientY - position.value.y,
	};
	document.addEventListener('mousemove', drag);
	document.addEventListener('mouseup', stopDrag);
};

const drag = (e) => {
	if (isDragging) {
		position.value = {
			x: e.clientX - offset.x,
			y: e.clientY - offset.y,
		};
	}
};

const stopDrag = () => {
	isDragging = false;
	document.removeEventListener('mousemove', drag);
	document.removeEventListener('mouseup', stopDrag);
};

onBeforeUnmount(() => {
	document.removeEventListener('mousemove', drag);
	document.removeEventListener('mouseup', stopDrag);
});
</script>

<style>
#box {
	width: 100px;
	height: 100px;
	background-color: lightblue;
	position: absolute;
	cursor: grab;
}
</style>
