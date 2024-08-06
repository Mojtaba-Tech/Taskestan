<template>
	<label
		v-if="hasLabel"
		:for="id"
		class="text-gray-600 font-semibold"
	>{{ labelText }}</label>
	<textarea
		v-model="model"
		class="border-2 transition w-full outline-0 rounded-small py-2 px-2.5"
	  :class="[...themeCssClassList, ...customClassList]"
	  :id="id"
	  :placeholder="placeholder"
	  :rows="rows"
	></textarea>
</template>

<script setup lang="ts">
import type {PublicTextareaModel} from "~/types/form"

const model = defineModel();

const props = withDefaults(defineProps<PublicTextareaModel>(), {
	placeholder: 'Enter your text...',
	hasLabel: true,
	labelText: 'input label',
	theme: 'primary',
	customClassList: () => [],
	rows: 6
})

let themeCssClassList: string[] = []
switch (props.theme) {
	case 'primary':
		themeCssClassList = ['border-gray-300', 'focus:border-gray-400', 'focus:bg-gray-100/70']
		break;
}
</script>