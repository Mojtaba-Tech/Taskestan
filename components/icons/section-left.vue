<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 16 16" fill="none">
		<path d="M0.75 2.5C0.75 1.5335 1.5335 0.75 2.5 0.75H13.5C14.4665 0.75 15.25 1.5335 15.25 2.5V13.5C15.25 14.4665 14.4665 15.25 13.5 15.25H2.5C1.5335 15.25 0.75 14.4665 0.75 13.5V2.5Z" :stroke="color" :stroke-width="strokeWidth"/>
		<rect x="7" y="16" width="1.5" height="16" rx="0.75" transform="rotate(180 7 16)" :fill="color"/>
	</svg>
</template>

<script setup lang="ts">
import type {IconModel} from "~/types/icon";

withDefaults(defineProps<IconModel>(), {
	width: 16,
	height: 16,
	color: '#2386F8',
	strokeWidth: 1.5
})
</script>