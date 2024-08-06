<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 10 6" fill="none">
		<path d="M1.0625 1.36111L5 5.30611L8.9375 1.36111" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
</template>

<script setup lang="ts">
import type {IconModel} from "~/types/icon";

withDefaults(defineProps<IconModel>(), {
	width: 10,
	height: 6,
	color: '#2386F8',
	strokeWidth: 1.125
})
</script>