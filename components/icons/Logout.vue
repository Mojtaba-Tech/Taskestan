<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 12 12" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd"
		      d="M7.6875 9C7.99816 9 8.25 9.25184 8.25 9.5625L8.25 10.125C8.25 11.1605 7.41053 12 6.375 12L1.875 12C0.839466 12 3.66942e-08 11.1605 8.19588e-08 10.125L4.42578e-07 1.875C1.44152e-06 0.839466 0.839468 -3.23925e-07 1.875 -2.7866e-07L6.375 -8.19589e-08C7.41053 -3.66942e-08 8.25 0.839467 8.25 1.875L8.25 2.4375C8.25 2.74816 7.99816 3 7.6875 3V3C7.37684 3 7.125 2.74816 7.125 2.4375L7.125 1.875C7.125 1.46079 6.78921 1.125 6.375 1.125L1.875 1.125C1.46079 1.125 1.125 1.46079 1.125 1.875L1.125 10.125C1.125 10.5392 1.46079 10.875 1.875 10.875L6.375 10.875C6.78921 10.875 7.125 10.5392 7.125 10.125L7.125 9.5625C7.125 9.25184 7.37684 9 7.6875 9V9Z" :fill="color"/>
		<path d="M9.5625 7.87781L11.4375 6.00281M9.5625 4.1278L11.4375 6.00281M11.4375 6.00281L3.5625 6.00272" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
</template>

<script setup lang="ts">
import type {IconModel} from "~/types/icon";

withDefaults(defineProps<IconModel>(), {
	width: 12,
	height: 12,
	color: '#2386F8',
	colorHover: '#9932d5',
	strokeWidth: 1.125
})
</script>

<style scoped>
path {
	transition: all 0.3s;
}

.group\/svg:hover .group-hover\/svg\:hovered {
	path {
		&[fill] {
			fill: v-bind(colorHover);
		}
	}
}
</style>