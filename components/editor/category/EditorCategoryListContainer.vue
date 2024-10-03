<template>
	<section>
		<EditorCategory
			v-for="color in ['cyan']"
			:color="color"
			:x="100"
			:y="50"
		/>
	</section>
</template>

<script setup lang="ts">
const route = useRoute()

const categoryStore = useCategoryStore()
const categoryStoreRefs = storeToRefs(categoryStore)
const categories = categoryStoreRefs.categories;
const isGetCategoriesLoading = categoryStoreRefs.isGetCategoriesLoading
const isCreateCategoryLoading = categoryStoreRefs.isCreateCategoryLoading

const loadCategories = async () => {
	categories.value = []
	
	await categoryStore.getCategories(parseInt(route.params.boardId as string))
}

onBeforeMount(loadCategories)
</script>

<style scoped>

</style>