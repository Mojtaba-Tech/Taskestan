<template>
	<svg :width="width" :height="height" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.75 3.5C0.75 2.5335 1.5335 1.75 2.5 1.75H11.5C12.4665 1.75 13.25 2.5335 13.25 3.5V13.5C13.25 14.4665 12.4665 15.25 11.5 15.25H2.5C1.5335 15.25 0.75 14.4665 0.75 13.5V3.5Z" :stroke="color" :stroke-width="strokeWidth"/>
		<path d="M4 0.75V3.25" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7 0.75V3.25" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M10 0.75V3.25" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M4 6.5L4.76477 6.4044C5.58347 6.30207 6.413 6.32509 7.22477 6.47268L7.49581 6.52196C8.32445 6.67263 9.17412 6.66518 10 6.5V6.5" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M4 9.5L4.88369 9.38954C5.62501 9.29687 6.37499 9.29687 7.11631 9.38954L8 9.5" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
</template>

<script setup lang="ts">
import type {IconModel} from "~/types/icon";

withDefaults(defineProps<IconModel>(), {
	width: 14,
	height: 16,
	color: '#2386F8',
	strokeWidth: 1.5
})
</script>