<template>
	<div>
		<PublicInput
			v-model="taskTitle"
			placeholder="Enter Task title..."
			:id="`editor_task_${taskListId}`"
			:has-label="false"
			:custom-class-list="['mb-2']"
			@keyup.enter="createTask"
			:disabled="isCreateTaskLoading"
		/>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	taskListId: number
}>()

const isCreateTaskVisible: Ref<boolean> = defineModel('isCreateTaskVisible', {required: true})

let taskTitle = ''

const taskStore = useTaskStore()
const taskStoreRefs = storeToRefs(taskStore)
const isCreateTaskLoading = taskStoreRefs.isCreateTaskLoading

const createTask = async () => {
	if(taskTitle.trim()) {
		await taskStore.createTask({
			taskList_id: props.taskListId,
			title: taskTitle
		})
		
		taskTitle = '';
		isCreateTaskVisible.value = false;
	} else {
		alert("Task Title is required")
	}
}
</script>

<style scoped>

</style>