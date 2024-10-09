import type {TablesInsert} from "~/types/database.types";

export const useTaskStore = defineStore('tasks', () => {
  const isCreateTaskLoading = ref(false)

  const createTask = (requestBody: TablesInsert<'tasks'>) => {
    isCreateTaskLoading.value = true

    const taskListStore = useTaskListStore()
    const taskListStoreRefs = storeToRefs(taskListStore)
    const taskLists = taskListStoreRefs.taskLists;
    
    return $fetch('/api/tasks', {method: "POST", body: requestBody})
      .then((response: any) => {
        // add created task to task list
        taskLists.value.forEach(taskList => {
          if(response.data[0].taskList_id === taskList.id) {
            taskList.tasks.unshift(response.data[0])
          }
        })
      })
      .catch((error) => console.log(error))
      .finally(() => isCreateTaskLoading.value = false)
  }

  return {
    isCreateTaskLoading,
    createTask
  }
})