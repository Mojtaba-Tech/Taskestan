import type {TablesInsert} from "~/types/database.types";

export const useTaskStore = defineStore('tasks', () => {
  const isCreateTaskLoading = ref(false)

  const createTask = (requestBody: TablesInsert<'tasks'>) => {
    isCreateTaskLoading.value = true
    
    return $fetch('/api/tasks', {method: "POST", body: requestBody})
      .then((response) => {})
      .catch((error) => console.log(error))
      .finally(() => isCreateTaskLoading.value = false)
  }

  return {
    isCreateTaskLoading,
    createTask
  }
})