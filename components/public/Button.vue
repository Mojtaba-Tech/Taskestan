<template>
	<button
	  :type="type"
	  class="rounded-small transition px-10 py-2"
	  :class="[...themeCssClassList, ...customClassList]"
	  @click.prevent="clicked"
	>
		{{ buttonText }}
	</button>
</template>

<script setup lang="ts">
import type {PublicButton} from "~/types/form"

defineOptions({
	inheritAttrs: false
})

const props = withDefaults(defineProps<PublicButton>(), {
	type: 'button',
	theme: 'primary',
	customClassList: () => [],
	buttonText: 'button text',
	clicked: () => ''
})

let themeCssClassList: string[] = []
switch (props.theme) {
	case 'primary':
		themeCssClassList = ['bg-blue-700', 'text-white', 'hover:bg-blue-600']
		break;
	case 'success':
		themeCssClassList = ['bg-green-700', 'text-white', 'hover:bg-green-600']
		break;
}
</script>