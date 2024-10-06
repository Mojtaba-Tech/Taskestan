<template>
	<div>
		
		<!-- Modal Overlay -->
		<Transition name="overlay">
			<section
				v-if="isNoteCreateModalVisible"
				@click="isNoteCreateModalVisible = false"
				class="fixed z-50 w-full h-screen right-0 top-0 bg-gray-600/60"
			></section>
		</Transition>
		<!-- End Modal Overlay -->
		
		<!-- Modal Content -->
		<Transition name="modal-content">
			<section
				v-if="isNoteCreateModalVisible"
				class="h-screen fixed z-50 right-0 w-1/2 top-0 bg-white"
			>
				<section class="overflow-y-auto h-full p-4">
					<h3 class="mb-3">Create a Note</h3>
					<form ref="createNoteForm" @submit.prevent="submitForm">
						<div class="mb-3">
							<PublicTextarea
								v-model="form.text"
								placeholder="Enter board text..."
								:rows="7"
								id="text"
								labelText="Note Text"
							/>
						</div>
						<div class="flex mb-3">
							<div class="w-1/2">
								<PublicColorPicker
									v-model="form.backgroundColor"
									label-text="Background Color"
								/>
							</div>
							<div class="w-1/2">
								<PublicColorPicker
									v-model="form.textColor"
									label-text="Text Color"
								/>
							</div>
						</div>
						<PublicButton
							type="submit"
							:clicked="submitForm"
							buttonText="Add Note"
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

const isNoteCreateModalVisible: Ref<boolean> = defineModel('isNoteCreateModalVisible', {required: true})

let form = ref({
	text: '',
	backgroundColor: '',
	textColor: ''
})

// note store
const noteStore = useNoteStore()

// editor store
const editorStore = useEditorStore()
const editorStoreRefs = storeToRefs(editorStore)
const editorArea = editorStoreRefs.editorArea as Ref<HTMLElement>;

async function submitForm() {
	if (form.value.text) {
		await noteStore.createNote({
			board_id: parseInt(route.params.boardId as string),
			text: form.value.text,
			settings: {
				position: {
					x: Math.ceil(Math.random() * 200 + editorArea.value.scrollLeft),
					y: Math.ceil(Math.random() * 200 + editorArea.value.scrollTop)
				},
				color: {
					bg: `${form.value.backgroundColor}BF`, // Add static alpha 75% to background color
					text: form.value.textColor
				}
			},
		})
		
		form.value = {
			text: '',
			backgroundColor: '',
			textColor: ''
		}

		isNoteCreateModalVisible.value = false;
	} else {
		alert("Note Text is required")
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

