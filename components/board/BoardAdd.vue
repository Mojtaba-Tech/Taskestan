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
					<form>
						<div class="mb-3">
							<label for="title" class="text-gray-600">Title</label>
							<input
							  class="border-2 border-gray-300 transition focus:border-gray-400 focus:bg-gray-100/70 w-full outline-0 rounded-small py-2 px-2.5"
							  type="text"
							  id="title"
							  placeholder="Enter board title..."
							>
						</div>
						<div class="mb-3">
							<label for="brief" class="text-gray-600">Brief</label>
							<input
							  class="border-2 border-gray-300 transition focus:border-gray-400 focus:bg-gray-100/70 w-full outline-0 rounded-small py-2 px-2.5"
							  type="text"
							  id="brief"
							  placeholder="Enter board brief..."
							>
						</div>
						<div class="mb-3">
							<label for="brief" class="text-gray-600">Description</label>
							<textarea
							  class="border-2 border-gray-300 transition focus:border-gray-400 focus:bg-gray-100/70 w-full outline-0 rounded-small py-2 px-2.5"
							  id="brief"
							  rows="7"
							  placeholder="Enter board description..."
							></textarea>
						</div>
						<button
						  class="bg-green-700 text-white rounded-small transition hover:bg-green-600 px-10 py-2"
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

