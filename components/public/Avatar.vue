<template>
	<div :style="{width, height}">
		<img
			v-if="image"
			:src="image"
			class="w-full h-full object-cover"
			alt="avatar image"
		/>
		<div
			v-else
			class="flex justify-center items-center w-full h-full rounded-full font-medium text-xs"
			:style="{color: textColor, backgroundColor: bgColor}"
		>
			{{text}}
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	image?: string,
	text?: string,
	textColor: string,
	bgColor: string,
	width: string,
	height: string
}>()
</script>

<style scoped>

</style>