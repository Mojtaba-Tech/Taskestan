<template>
	<div class="bg-white border border-black/10 rounded-lg p-6 shadow-2 mb-3">
		<h3 class="text-13 text-gray-700 font-normal mb-1">
			{{task.title}}
		</h3>
		<span class="text-xs text-gray-300">
			{{ $dayjs(task.created_at).format('MMMM DD, YYYY') }}
		</span>
		<div class="flex items-center justify-end pt-16">
			<PublicTag
				text="label"
				:theme="'cyan'"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import type {TaskModel} from "~/types/task";

defineProps<{
	task: TaskModel
}>()
</script>

<style scoped>

</style>