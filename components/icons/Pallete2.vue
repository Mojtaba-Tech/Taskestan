<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 16 16" fill="none">
		<path d="M8.75 2.5C8.75 1.5335 9.5335 0.75 10.5 0.75H13.5C14.4665 0.75 15.25 1.5335 15.25 2.5V12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12V2.5Z" :stroke="color" :stroke-width="strokeWidth"/>
		<path fill-rule="evenodd" clip-rule="evenodd"
		      d="M8.00002 2.53622L7.92467 2.46087C6.94836 1.48456 5.36545 1.48456 4.38914 2.46087L2.26782 4.58219C1.29151 5.5585 1.29151 7.14141 2.26782 8.11772L8.98533 14.8352C9.8277 15.6776 10.9523 16.0657 12.0547 15.9996C12.0365 15.9998 12.0183 16 12 16C9.79088 16 8.00002 14.2091 8.00002 12V11.7286L3.32848 7.05706C2.93795 6.66654 2.93795 6.03338 3.32848 5.64285L5.4498 3.52153C5.84032 3.13101 6.47349 3.13101 6.86401 3.52153L8.00002 4.65754V2.53622Z" :fill="color"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M2.17596 8.02081C2.20556 8.05369 2.23618 8.08598 2.26783 8.11763L3.65021 9.50001H2.5C1.94772 9.50001 1.5 9.94772 1.5 10.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H8.65021L8.98534 14.8351C9.70729 15.5571 10.6365 15.9454 11.5815 16H2.5C1.11929 16 0 14.8807 0 13.5V10.5C0 9.2291 0.948331 8.1797 2.17596 8.02081Z" :fill="color"/>
		<path d="M12 12V11" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/>
	</svg>
</template>

<script setup lang="ts">
import type {IconModel} from "~/types/icon";

withDefaults(defineProps<IconModel>(), {
	width: 16,
	height: 16,
	color: '#58585C',
	strokeWidth: 1.5
})
</script>

<style scoped>
path {
	transition: all 0.3s;
}

.group\/svg:hover .group-hover\/svg\:hovered {
	path {
		&[stroke] {
			stroke: v-bind(colorHover);
		}
		
		&[fill] {
			fill: v-bind(colorHover);
		}
	}
}
</style>