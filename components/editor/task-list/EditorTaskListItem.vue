<template>
	<div
		class="absolute w-64 select-none"
		:style="{ top: position.y + 'px', left: position.x + 'px', zIndex: taskList.settings.zIndex }"
		@mousedown="startDrag"
		data-element-role="taskList"
	>
		
		<!-- Header -->
		<header class="inline-flex justify-between items-center w-full mb-2">
			<div class="flex justify-between items-center mr-20">
				<div
					@click.prevent="toggleTaskListHeight"
					class="group/svg p-1 mr-2.5 transform transition-all"
				>
					<IconsArrowDown
						color="#58585C"
						color-hover="#44AAFF"
						class="group-hover/svg:hovered pointer-events-none"
					/>
				</div>
				<h2 class="text-13 text-gray-700 whitespace-nowrap leading-3">
					{{ taskList.title }}
				</h2>
			</div>
			<div
				@click="toggleCreateTaskVisibility"
				class="group/svg cursor-pointer p-1 mr-1"
			>
				<IconsPlus
					color="#848589"
					color-hover="#44AAFF"
					class="group-hover/svg:hovered"
				/>
			</div>
		</header>
		<!-- End Header -->
		
		<!-- Task Create Input -->
		<Transition name="scale-up">
			<EditorTaskCreate
				v-if="isCreateTaskVisible"
				v-model:is-create-task-visible="isCreateTaskVisible"
				:taskListId="taskList.id"
			/>
		</Transition>
		<!-- End Task Create Input -->
		
		<!-- Tasks -->
		<section
			:id="`tasks_${taskList.id}`"
			class="overflow-y-hidden transition-all duration-500"
			data-collapsed="false"
		>
			
			<!-- Task Item -->
			<EditorTaskItem
				v-for="(task, index) in taskList.tasks"
				:task="task"
				:key="index"
			/>
			<!-- End Task Item -->
		
		</section>
		<!-- End Tasks -->
	
	</div>
</template>

<script setup lang="ts">
import type {TaskListModel, TaskListSettingsModel} from "~/types/task-list";

const props = defineProps<{
	taskList: TaskListModel,
	updateTaskListPosition: ({taskListId, settings}: { taskListId: number, settings: TaskListSettingsModel }) => void
}>()

const taskStore = useTaskStore()
const taskStoreRefs = storeToRefs(taskStore)
const isCreateTaskLoading = taskStoreRefs.isCreateTaskLoading

const isCreateTaskVisible = ref(false)

let {isDraggingSomething} = storeToRefs(useDragAndDropStore())

// Initial position
const position = ref({
	x: props.taskList.settings.position.x,
	y: props.taskList.settings.position.y
});

let startPositionSnapshot: { x: number, y: number };

let offset = {x: 0, y: 0};

const startDrag = (e: MouseEvent) => {
	startPositionSnapshot = {
		x: position.value.x,
		y: position.value.y,
	}
	
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
		y: (e.clientY - offset.y) < -4 ? -4 : e.clientY - offset.y,
	};
};

const stopDrag = () => {
	isDraggingSomething.value = false;
	document.removeEventListener('mousemove', drag);
	document.removeEventListener('mouseup', stopDrag);
	
	// Prevent API call when position has not changed
	if (
		startPositionSnapshot.x !== position.value.x ||
		startPositionSnapshot.y !== position.value.y
	) {
		updateTaskListPosition()
	}
};

const updateTaskListPosition = () => {
	const settings = {...props.taskList.settings}
	settings.position = {x: position.value.x, y: position.value.y}
	props.updateTaskListPosition({taskListId: props.taskList.id, settings})
}

const toggleCreateTaskVisibility = () => {
	isCreateTaskVisible.value = !isCreateTaskVisible.value;
	
	setTimeout(() => {
		document.getElementById(`editor_task_${props.taskList.id}`)?.focus()
	}, 1)
}

const toggleTaskListHeight = (event: MouseEvent) => {
	const taskListElement = document.getElementById(`tasks_${props.taskList.id}`) as HTMLElement
	(event.target as HTMLElement).classList.toggle('rotate-x-180')
	
	if (taskListElement.getAttribute('data-collapsed') === 'false') {
		taskListElement.setAttribute('data-collapsed', 'true')
		taskListElement.style.height = `${taskListElement.scrollHeight}px`;
		
		setTimeout(() => {
			taskListElement.style.height = '0';
		}, 1)
	} else {
		taskListElement.setAttribute('data-collapsed', 'false')
		taskListElement.style.height = '0';
		
		setTimeout(() => {
			taskListElement.style.height = `${taskListElement.scrollHeight}px`;
		}, 1)
	}
}

onBeforeUnmount(() => {
	document.removeEventListener('mousemove', drag);
	document.removeEventListener('mouseup', stopDrag);
});

watch(isCreateTaskLoading, () => {
	if(!isCreateTaskLoading.value) {
		const taskListElement = document.getElementById(`tasks_${props.taskList.id}`) as HTMLElement
		taskListElement.style.height = `${taskListElement.scrollHeight}px`;
	}
})
</script>

<style scoped>

</style>