<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 10 10" fill="none">
		<path d="M0.625 5L9.375 5" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M5 9.375L5 0.624999" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
	</svg>
</template>

<script setup lang="ts">
import type {IconModel} from "~/types/icon";

withDefaults(defineProps<IconModel>(), {
	width: 10,
	height: 10,
	color: 'white',
	strokeWidth: 0.833333
})
</script>