<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 16 16" fill="none">
		<circle cx="8" cy="8" r="7.25" :stroke="color" :stroke-width="strokeWidth"/>
		<circle cx="8" cy="8" r="2.25" :stroke="color" :stroke-width="strokeWidth"/>
		<path d="M8 2L8 0.75" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M8 15.25V14" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M11 2.80385L11.625 1.72131" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M4.375 14.2787L5 13.1962" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M13.1962 5L14.2787 4.375" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M1.7213 11.625L2.80383 11" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M14 8L15.25 8" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M0.75 8L2 8" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M13.1962 11L14.2787 11.625" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M1.7213 4.375L2.80383 5" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M11 13.1962L11.625 14.2787" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M4.375 1.7213L5 2.80383" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M11.25 13.6292L11.625 14.2787" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M9.25 5.83493L11.625 1.72131" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M9.25 10.1651L11.625 14.2787" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M0.75 8L5.5 8" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
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