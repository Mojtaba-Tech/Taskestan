<template>
	<div class="bg-white border border-black/10 rounded-lg p-6 shadow-2 mb-3">
		<h3 class="text-13 text-gray-700 font-normal mb-1">
			Enhance browser section
		</h3>
		<span class="text-xs text-gray-300">
			Oct 29 - Oct 30
		</span>
		<div class="flex items-center justify-end pt-16">
			<PublicTag
				text="New"
				:theme="color as 'cyan' | 'orange' | 'red' | 'green'"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	color: string
}>()
</script>

<style scoped>

</style>