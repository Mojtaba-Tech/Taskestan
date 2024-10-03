import type {CategoryModel} from "~/types/category";
import type {TablesInsert} from "~/types/database.types";

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<CategoryModel[]>([])
  const isGetCategoriesLoading = ref(false)
  const isCreateCategoryLoading = ref(false)

  const getCategories = (boardId: number) => {
    isGetCategoriesLoading.value = true

    return $fetch('/api/categories', {method: 'GET', query: {boardId}})
      .then((response) => {
        categories.value = <CategoryModel[]>response
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        isGetCategoriesLoading.value = false
      })
  }

  const createCategory = (requestBody: TablesInsert<'categories'>) => {
    isCreateCategoryLoading.value = true

    return $fetch('/api/categories', {method: 'POST', body: requestBody})
      .then((response: any) => {
        categories.value.push(response.data[0])
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        isCreateCategoryLoading.value = false
      })
  }

  return {
    categories,
    isGetCategoriesLoading,
    isCreateCategoryLoading,
    getCategories,
    createCategory,
  }
})