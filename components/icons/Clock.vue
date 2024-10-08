<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 16 16" fill="none">
		<circle cx="8" cy="8" r="7.25" :stroke="color" :stroke-width="strokeWidth"/>
		<path d="M8 8V4.75" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
		<path d="M8 8L10.2981 10.2981" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
	</svg>
</template>

<script setup lang="ts">
import type {IconModel} from "~/types/icon";

withDefaults(defineProps<IconModel>(), {
	width: 16,
	height: 16,
	color: '#2386F8',
	colorHover: '#9932d5',
	strokeWidth: 1.5
})
</script>

<style scoped>
path,
circle {
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
	
	circle {
		&[stroke] {
			stroke: v-bind(colorHover);
		}
	}
}
</style>