<template>
	<div v-if="hasLabel" class="mb-1">
		<label
			:for="id"
			class="text-gray-600 font-semibold"
		>{{ labelText }}</label>
	</div>
	<div class="relative">
		<el-color-picker
			ref="colorPicker"
			v-model="model"
			:predefine="predefineColors"
			:show-alpha="showAlpha"
			:class="[
				customClassList,
				$slots.default && '!absolute w-0 h-0 opacity-0 -top-2 left-1/2'
			]"
			:id="id"
			@blur="emit('on-blur')"
		></el-color-picker>
		<slot name="default" :showColorPicker="colorPicker?.show"/>
	</div>
</template>

<script setup lang="ts">
import type {PublicColorPickerModel} from "~/types/form";
import type {ColorPickerInstance} from "element-plus";

const emit = defineEmits(['on-blur']);

withDefaults(defineProps<PublicColorPickerModel>(), {
	hasLabel: true,
	showAlpha: false
})

const model: Ref<string> = defineModel({required: true});

const colorPicker = ref() as Ref<ColorPickerInstance>;

const predefineColors = [
	'#ff4500',
	'#ff8c00',
	'#ffd700',
	'#90ee90',
	'#00ced1',
	'#1e90ff',
	'#c71585',
]

watch(() => colorPicker.value?.color.value, (newColor, oldColor) => {
	if(oldColor) model.value = newColor;
})
</script>

<style scoped>

</style>