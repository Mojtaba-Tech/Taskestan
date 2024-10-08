<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 14 16" fill="none">
		<mask id="path-1-inside-1_7179_2148" fill="white">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M4.14131 2C4.37911 2 4.57899 1.83002 4.66387 1.60789C5.02311 0.66772 5.93358 0 7 0C8.06642 0 8.97689 0.66772 9.33613 1.60789C9.42101 1.83002 9.62089 2 9.85869 2H11.5C12.8807 2 14 3.11929 14 4.5V13.5C14 14.8807 12.8807 16 11.5 16H2.5C1.11929 16 0 14.8807 0 13.5V4.5C0 3.11929 1.11929 2 2.5 2H4.14131Z"/>
		</mask>
		<path
			d="M9.33613 1.60789L10.7373 1.07248L9.33613 1.60789ZM4.66387 1.60789L3.26267 1.07249L4.66387 1.60789ZM6.06506 2.14329C6.2097 1.76476 6.5758 1.5 7 1.5V-1.5C5.29136 -1.5 3.83652 -0.429325 3.26267 1.07249L6.06506 2.14329ZM7 1.5C7.4242 1.5 7.7903 1.76476 7.93494 2.14329L10.7373 1.07248C10.1635 -0.429325 8.70864 -1.5 7 -1.5V1.5ZM9.85869 3.5H11.5V0.5H9.85869V3.5ZM11.5 3.5C12.0523 3.5 12.5 3.94772 12.5 4.5H15.5C15.5 2.29086 13.7091 0.5 11.5 0.5V3.5ZM12.5 4.5V13.5H15.5V4.5H12.5ZM12.5 13.5C12.5 14.0523 12.0523 14.5 11.5 14.5V17.5C13.7091 17.5 15.5 15.7091 15.5 13.5H12.5ZM11.5 14.5H2.5V17.5H11.5V14.5ZM2.5 14.5C1.94772 14.5 1.5 14.0523 1.5 13.5H-1.5C-1.5 15.7091 0.29086 17.5 2.5 17.5V14.5ZM1.5 13.5V4.5H-1.5V13.5H1.5ZM1.5 4.5C1.5 3.94772 1.94771 3.5 2.5 3.5V0.5C0.290861 0.5 -1.5 2.29086 -1.5 4.5H1.5ZM2.5 3.5H4.14131V0.5H2.5V3.5ZM7.93494 2.14329C8.18914 2.80856 8.86355 3.5 9.85869 3.5V0.5C10.3782 0.5 10.6529 0.851482 10.7373 1.07248L7.93494 2.14329ZM3.26267 1.07249C3.34712 0.851482 3.62176 0.5 4.14131 0.5V3.5C5.13645 3.5 5.81086 2.80856 6.06506 2.14329L3.26267 1.07249Z" :fill="color" mask="url(#path-1-inside-1_7179_2148)"/>
		<path d="M10.75 2.5L10.75 4.5C10.75 5.05228 10.3023 5.5 9.75 5.5L4.25 5.5C3.69772 5.5 3.25 5.05228 3.25 4.5L3.25 2.5" :stroke="color" :stroke-width="strokeWidth"/>
		<path d="M4 8.5L4.76477 8.4044C5.58347 8.30207 6.413 8.32509 7.22477 8.47268L7.49581 8.52196C8.32445 8.67263 9.17412 8.66518 10 8.5V8.5" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M4 11.5L4.88369 11.3895C5.62501 11.2969 6.37499 11.2969 7.11631 11.3895L8 11.5" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
</template>

<script setup lang="ts">
import type {IconModel} from "~/types/icon";

withDefaults(defineProps<IconModel>(), {
	width: 14,
	height: 16,
	color: '#2386F8',
	colorHover: '#9932d5',
	strokeWidth: 1.5
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
		
		&[stroke] {
			stroke: v-bind(colorHover);
		}
	}
}
</style>