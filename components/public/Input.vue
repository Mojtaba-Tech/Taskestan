<template>
	<label
		v-if="hasLabel"
		:for="id"
		class="inline-flex text-gray-600 font-semibold mb-1"
	>{{ labelText }}</label>
	<input
		v-model="model"
		class="border-2 transition w-full outline-0 rounded-small py-2 px-2.5 disabled:bg-gray-100 disabled:opacity-50"
	  :class="[...themeCssClassList, ...customClassList]"
	  :type="type"
	  :id="id"
	  :placeholder="placeholder"
		v-bind="$attrs"
	/>
</template>

<script setup lang="ts">
import type {PublicInputModel} from "~/types/form"

const model: Ref<string> = defineModel({required: true});

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