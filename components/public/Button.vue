<template>
	<button
	  :type="type"
	  class="rounded-md transition"
	  :class="[...themeCssClassList, ...customClassList, ...sizeCssClassList]"
	  @click.prevent="clicked"
	>
		{{ buttonText }}
	</button>
</template>

<script setup lang="ts">
import type {PublicButtonModel} from "~/types/form"

defineOptions({
	inheritAttrs: false
})

const props = withDefaults(defineProps<PublicButtonModel>(), {
	type: 'button',
	theme: 'primary',
	size: 'md',
	customClassList: () => [],
	clicked: () => ''
})

let themeCssClassList: string[] = []
switch (props.theme) {
	case 'primary':
		themeCssClassList = ['bg-blue-700', 'text-white', 'hover:bg-blue-600']
		break;
	case 'success':
		themeCssClassList = ['bg-success-800', 'text-white', 'hover:bg-success-700']
		break;
	case 'light':
		themeCssClassList = ['bg-white', 'text-gray-700', 'hover:bg-gray-50', 'shadow-4']
		break;
}

let sizeCssClassList: string[] = []
switch (props.size) {
	case 'xs':
		sizeCssClassList = ['px-2.5', 'py-1', 'text-13'];
		break;
	case 'sm':
		sizeCssClassList = ['px-3', 'py-1.5', 'text-sm'];
		break;
	case 'md':
		sizeCssClassList = ['px-4', 'py-2', 'text-md'];
		break;
	case 'lg':
		sizeCssClassList = ['px-6', 'py-2.5', 'text-lg'];
		break;
	case 'xl':
		sizeCssClassList = ['px-8', 'py-3', 'text-xl'];
		break;
}
</script>