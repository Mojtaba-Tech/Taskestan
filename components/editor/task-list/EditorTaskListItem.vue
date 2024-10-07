<template>
	<div
		class="absolute w-64 select-none mr-4"
		:style="{ top: position.y + 'px', left: position.x + 'px', zIndex: zIndex }"
		@mousedown="startDrag"
		data-element-role="taskList"
	>
		
		<!-- Task List Title -->
		<header class="inline-flex justify-between items-center w-full mb-3">
			<div class="flex justify-between items-center mr-20">
				<div class="mr-3.5">
					<IconsArrowDown color="#58585C"/>
				</div>
				<h2 class="text-13 text-gray-700 whitespace-nowrap leading-3">
					{{taskList.title}}
				</h2>
			</div>
			<div class="cursor-pointer mr-1">
				<IconsPlus color="#848589"/>
			</div>
		</header>
		<!-- End Task List Title -->
		
		<!-- Tasks List -->
		<section>
			
			<!-- Task Item -->
			<template	v-for="i in 2">
				<EditorTask :color="'purple'" />
			</template>
			<!-- End Task Item -->
		
		</section>
		<!-- End Tasks List -->
	
	</div>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {onBeforeUnmount, ref} from "vue";
import type {TaskListModel, TaskListSettingsModel} from "~/types/task-list";

const props = defineProps<{
	taskList: TaskListModel,
	updateTaskListPosition: ({taskListId, settings}: {taskListId: number, settings: TaskListSettingsModel}) => void
}>()

let {isDraggingSomething} = storeToRefs(useDragAndDropStore())

// Initial position
const position = ref({
	x: props.taskList.settings.position.x,
	y: props.taskList.settings.position.y
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
		x: (e.clientX - offset.x) < 2 ? 2 : e.clientX - offset.x,
		y: (e.clientY - offset.y) < -9 ? -9 : e.clientY - offset.y,
	};
};

const stopDrag = () => {
	isDraggingSomething.value = false;
	document.removeEventListener('mousemove', drag);
	document.removeEventListener('mouseup', stopDrag);
	
	updateTaskListPosition()
};

const updateTaskListPosition = () => {
	const settings = {...props.taskList.settings}
	settings.position = {x: position.value.x, y: position.value.y}
	props.updateTaskListPosition({taskListId: props.taskList.id, settings})
}

onBeforeUnmount(() => {
	document.removeEventListener('mousemove', drag);
	document.removeEventListener('mouseup', stopDrag);
});
</script>

<style scoped>

</style>