import type {TaskListModel, TaskListSettingsModel} from "~/types/task-list";
import type {TablesInsert} from "~/types/database.types";

export const useTaskListStore = defineStore('taskLists', () => {
  const taskLists = ref<TaskListModel[]>([])
  const isGetTaskListsLoading = ref(false)
  const isCreateTaskListLoading = ref(false)
  const isUpdateTaskListPositionLoading = ref(false)

  const getTaskLists = (boardId: number) => {
    isGetTaskListsLoading.value = true

    return $fetch('/api/task-lists', {method: 'GET', query: {boardId}})
      .then((response) => {
        taskLists.value = <TaskListModel[]>response
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        isGetTaskListsLoading.value = false
      })
  }

  const createTaskList = (requestBody: TablesInsert<'taskLists'>) => {
    isCreateTaskListLoading.value = true

    return $fetch('/api/task-lists', {method: 'POST', body: requestBody})
      .then((response: any) => {
        taskLists.value.push(response.data[0])
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        isCreateTaskListLoading.value = false
      })
  }

  const updateTaskListPosition = (requestBody: {taskListId: number, settings: TaskListSettingsModel}) => {
    isUpdateTaskListPositionLoading.value = true

    $fetch('/api/task-lists/position', {method: 'PUT', body: requestBody})
      .then((response) => {})
      .catch((error) => console.log(error))
      .finally(() => {
        isUpdateTaskListPositionLoading.value = false
      })
  }

  return {
    taskLists,
    isGetTaskListsLoading,
    isCreateTaskListLoading,
    getTaskLists,
    createTaskList,
    updateTaskListPosition
  }
})