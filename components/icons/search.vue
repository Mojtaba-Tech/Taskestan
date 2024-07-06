<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 16 16" fill="none">
		<circle cx="7" cy="7" r="6.25" :stroke="stroke" :stroke-width="strokeWidth"/>
		<path d="M11.5 11.5L15.25 15.25" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
</template>

<script setup lang="ts">
import type {IconModel} from "~/types/icon";

withDefaults(defineProps<IconModel>(), {
	width: 16,
	height: 16,
	stroke: '#2386F8',
	strokeWidth: 1.5
})
</script>