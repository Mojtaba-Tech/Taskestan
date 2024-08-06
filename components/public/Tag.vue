<template>
	<span
		class="inline-flex text-xs font-medium text-gray-700 px-2 py-0.5 rounded whitespace-nowrap"
		:class="[themeCssClassList, customClassList]"
	>{{text}}</span>
</template>

<script setup lang="ts">
import type {TagModel} from "~/types/tag"

defineOptions({
	inheritAttrs: false
})

const props = withDefaults(defineProps<TagModel>(), {
	text: 'Tag text',
	theme: 'cyan',
})

let themeCssClassList: string[] = []
switch (props.theme) {
	case 'cyan':
		themeCssClassList = ['bg-cyan-100']
		break;
	case 'orange':
		themeCssClassList = ['bg-warning-100']
		break;
	case 'red':
		themeCssClassList = ['bg-error-100']
		break;
	case 'green':
		themeCssClassList = ['bg-success-100']
		break;
}
</script>