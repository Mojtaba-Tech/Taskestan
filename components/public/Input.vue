<template>
	<label
		v-if="hasLabel"
		:for="id"
		class="text-gray-600 font-semibold"
	>{{ labelText }}</label>
	<input
		v-model="model"
		class="border-2 transition w-full outline-0 rounded-small py-2 px-2.5"
	  :class="[...themeCssClassList, ...customClassList]"
	  :type="type"
	  :id="id"
	  :placeholder="placeholder"
	/>
</template>

<script setup lang="ts">
import type {PublicInputModel} from "~/types/form"

const model = defineModel();

const props = withDefaults(defineProps<PublicInputModel>(), {
	type: 'text',
	placeholder: 'Enter your text...',
	hasLabel: true,
	labelText: 'input label',
	theme: 'primary',
	customClassList: () => []
})

let themeCssClassList: string[] = []
switch (props.theme) {
	case 'primary':
		themeCssClassList = ['border-gray-300', 'focus:border-gray-400', 'focus:bg-gray-100/70']
		break;
}
</script>