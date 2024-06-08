<template>
	<div>
		
		<!-- Modal Overlay -->
		<Transition name="overlay">
			<section
			  v-if="isVisible"
			  @click="isVisible = false"
			  class="fixed w-full h-screen right-0 top-0 bg-gray-600/60"
			></section>
		</Transition>
		<!-- End Modal Overlay -->
		
		<!-- Modal Content -->
		<Transition name="modal-content">
			<section
			  v-if="isVisible"
			  class="h-screen fixed right-0 w-1/2 top-0 bg-white"
			>
				<section class="overflow-y-auto h-full p-4">
					<form @submit.prevent="submitForm">
						<div class="mb-3">
							<PublicInput
							  placeholder="Enter board title..."
							  id="title"
							  labelText="Title"
							  v-model="form.title"
							/>
						</div>
						<div class="mb-3">
							<PublicInput
							  placeholder="Enter board brief..."
							  id="brief"
							  labelText="Brief"
							  v-model="form.brief"
							/>
						</div>
						<div class="mb-3">
							<PublicTextarea
							  placeholder="Enter board description..."
							  :rows="7"
							  id="description"
							  labelText="Description"
							  v-model="form.description"
							/>
						</div>
						<button
						  class="bg-green-700 text-white rounded-small transition hover:bg-green-600 px-10 py-2"
						  type="submit"
						>Add Board
						</button>
					</form>
				</section>
			</section>
		</Transition>
		<!-- End Modal Content -->
	
	</div>
</template>

<script lang="ts" setup>
// const {
// 	isVisible = false
// } = defineProps<{
// 	isVisible: boolean
// }>()

const isVisible = defineModel('isVisible')

const form = {
	title: '',
	brief: '',
	description: ''
}

function submitForm() {
	console.log(form)
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

