<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 15 16" fill="none">
		<path d="M3.73225 15.25L0.73999 0.75L13.2617 8.31952L7.2373 9.95452L3.73225 15.25Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="square" stroke-linejoin="round"/>
	</svg>
</template>

<script setup lang="ts">
import type {IconModel} from "~/types/icon";

withDefaults(defineProps<IconModel>(), {
	width: 15,
	height: 16,
	color: '#58585C',
	strokeWidth: 1.5
})
</script>