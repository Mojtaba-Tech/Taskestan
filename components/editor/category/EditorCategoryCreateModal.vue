<template>
	<div>
		
		<!-- Modal Overlay -->
		<Transition name="overlay">
			<section
				v-if="isCategoryCreateModalVisible"
				@click="isCategoryCreateModalVisible = false"
				class="fixed z-50 w-full h-screen right-0 top-0 bg-gray-600/60"
			></section>
		</Transition>
		<!-- End Modal Overlay -->
		
		<!-- Modal Content -->
		<Transition name="modal-content">
			<section
				v-if="isCategoryCreateModalVisible"
				class="h-screen fixed z-50 right-0 w-1/2 top-0 bg-white"
			>
				<section class="overflow-y-auto h-full p-4">
					<h3 class="mb-3">Create a Category</h3>
					<form ref="createCategoryForm" @submit.prevent="submitForm">
						<div class="mb-3">
							<PublicInput
								v-model="form.title"
								type="text"
								placeholder="Enter category title..."
								:rows="7"
								id="text"
								labelText="Category Title"
							/>
						</div>
						<PublicButton
							type="submit"
							:clicked="submitForm"
							buttonText="Add Category"
						/>
					</form>
				</section>
			</section>
		</Transition>
		<!-- End Modal Content -->
	
	</div>
</template>

<script lang="ts" setup>
const route = useRoute()

const isCategoryCreateModalVisible: Ref<boolean> = defineModel('isCategoryCreateModalVisible', {required: true})

let form = ref({
	title: ''
})

const categoryStore = useCategoryStore()

// editor store
const editorStore = useEditorStore()
const editorStoreRefs = storeToRefs(editorStore)
const editorArea = editorStoreRefs.editorArea as Ref<HTMLElement>;

async function submitForm() {
	if (form.value.title) {
		await categoryStore.createCategory({
			board_id: parseInt(route.params.boardId as string),
			title: form.value.title,
			settings: {
				position: {
					x: Math.ceil(Math.random() * 200 + editorArea.value.scrollLeft),
					y: Math.ceil(Math.random() * 200 + editorArea.value.scrollTop)
				}
			},
		})
		
		form.value = {
			title: ''
		}

		isCategoryCreateModalVisible.value = false;
	} else {
		alert("Category Title is required")
	}
}
</script>

<style lang="scss">
.overlay-enter-active,
.overlay-leave-active {
	transition: opacity 0.5s ease;
}

.overlay-enter-from,
.overlay-leave-to {
	opacity: 0;
}

.modal-content-enter-active,
.modal-content-leave-active {
	transition: right 0.5s ease-in-out;
}

.modal-content-enter-from,
.modal-content-leave-to {
	right: -50% !important;
}
</style>

