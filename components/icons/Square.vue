<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 14 14" fill="none">
		<path d="M2.41671 0.74998H11.5834C12.5038 0.74998 13.25 1.49617 13.25 2.41665V11.5833C13.25 12.5038 12.5038 13.25 11.5834 13.25H2.41671C1.49623 13.25 0.750041 12.5038 0.750041 11.5833V2.41664C0.750041 1.49617 1.49623 0.74998 2.41671 0.74998Z" :stroke="color" :stroke-width="strokeWidth"/>
	</svg>
</template>

<script setup lang="ts">
import type {IconModel} from "~/types/icon";

withDefaults(defineProps<IconModel>(), {
	width: 16,
	height: 16,
	color: '#2386F8',
	strokeWidth: 0.833333
})
</script>