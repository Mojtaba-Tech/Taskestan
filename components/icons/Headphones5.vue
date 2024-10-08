<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 18 17" fill="none">
		<path d="M5.02159 15.2158C3.79828 15.4342 2.62957 14.6195 2.4112 13.3962L1.78558 9.89161C1.56721 8.66831 2.38186 7.4996 3.60516 7.28122L3.90395 7.22788C4.03988 7.20362 4.16973 7.29414 4.194 7.43006L5.52255 14.8724C5.54682 15.0083 5.4563 15.1382 5.32038 15.1625L5.02159 15.2158Z" :stroke="color"
		      :stroke-width="strokeWidth"/>
		<path d="M4.79602 8.36511L5.91828 8.16477C6.19012 8.11625 6.44984 8.29728 6.49837 8.56913L7.28914 12.9989C7.33767 13.2708 7.15667 13.5304 6.88486 13.579L5.76256 13.7795" :stroke="color" :stroke-width="strokeWidth"/>
		<path d="M12.9784 15.2157C14.2017 15.434 15.3704 14.6194 15.5888 13.3961L16.2144 9.89149C16.4328 8.66819 15.6181 7.49948 14.3948 7.2811L14.096 7.22776C13.9601 7.2035 13.8303 7.29402 13.806 7.42994L12.4774 14.8723C12.4532 15.0082 12.5437 15.1381 12.6796 15.1623L12.9784 15.2157Z" :stroke="color"
		      :stroke-width="strokeWidth"/>
		<path d="M13.204 8.36499L12.0817 8.16465C11.8099 8.11612 11.5502 8.29716 11.5016 8.569L10.7109 12.9988C10.6623 13.2706 10.8433 13.5303 11.1151 13.5789L12.2374 13.7794" :stroke="color" :stroke-width="strokeWidth"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M3.55856 7.31621C3.26182 4.37611 5.52839 1.5 8.82556 1.5H9.17268C12.6661 1.5 15.0026 4.72865 14.3591 7.84125L15.874 7.91489C16.5437 3.99016 13.5731 0 9.17268 0H8.82556C4.67647 0 1.79852 3.54744 2.04469 7.24261L3.55856 7.31621Z" :fill="color"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M3.55856 7.31621C3.26182 4.37611 5.52839 1.5 8.82556 1.5H9.17268C12.6661 1.5 15.0026 4.72865 14.3591 7.84125L15.874 7.91489C16.5437 3.99016 13.5731 0 9.17268 0H8.82556C4.67647 0 1.79852 3.54744 2.04469 7.24261L3.55856 7.31621Z" :fill="color"/>
	</svg>
</template>

<script setup lang="ts">
import type {IconModel} from "~/types/icon";

withDefaults(defineProps<IconModel>(), {
	width: 18,
	height: 17,
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