<template>
	<section>
		<!--<TransitionGroup name="scale-up">-->
		<EditorTaskListItem
			v-if="(!isGetTaskListsLoading || !isCreateTaskListLoading)"
			v-for="(taskList, index) in taskLists"
			:index="index"
			:task-list="taskList"
			:update-task-list-position="taskListStore.updateTaskListPosition"
		/>
		<!--</TransitionGroup>-->
	</section>
</template>

<script setup lang="ts">
const route = useRoute()

const taskListStore = useTaskListStore()
const taskListStoreRefs = storeToRefs(taskListStore)
const taskLists = taskListStoreRefs.taskLists;
const isGetTaskListsLoading = taskListStoreRefs.isGetTaskListsLoading
const isCreateTaskListLoading = taskListStoreRefs.isCreateTaskListLoading

const loadTaskLists = async () => {
	taskLists.value = []
	
	await taskListStore.getTaskLists(parseInt(route.params.boardId as string))
}

onBeforeMount(loadTaskLists)
</script>

<style scoped>

</style>