<template>
	<div
		class="absolute w-64 select-none mr-4"
		:style="{ top: position.y + 'px', left: position.x + 'px', zIndex: zIndex }"
		@mousedown="startDrag"
		data-element-role="category"
	>
		
		<!-- Category Title -->
		<header class="inline-flex justify-between items-center w-full mb-3">
			<div class="flex justify-between items-center mr-20">
				<div class="mr-3.5">
					<IconsArrowDown color="#58585C"/>
				</div>
				<h2 class="text-13 text-gray-700 whitespace-nowrap">
					Getting Start
				</h2>
			</div>
			<div class="cursor-pointer mr-1">
				<IconsPlus color="#848589"/>
			</div>
		</header>
		<!-- End Category Title -->
		
		<!-- Tasks List -->
		<section>
			
			<!-- Task Item -->
			<template	v-for="i in 3">
				<EditorTask :color="color" />
			</template>
			<!-- End Task Item -->
		
		</section>
		<!-- End Tasks List -->
	
	</div>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {onBeforeUnmount, ref} from "vue";

const props = defineProps<{
	y: number,
	x: number,
	color: string
}>()

let {isDraggingSomething} = storeToRefs(useDragAndDropStore())

const position = ref({x: props.x, y: props.y}); // Initial position
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
		x: (e.clientX - offset.x) < 6 ? 6 : e.clientX - offset.x,
		y: (e.clientY - offset.y) < 6 ? 6 : e.clientY - offset.y,
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