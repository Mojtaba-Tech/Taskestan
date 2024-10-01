<template>
	<div class="mb-1">
		<label
			v-if="hasLabel"
			:for="id"
			class="text-gray-600 font-semibold"
		>{{ labelText }}</label>
	</div>
	<el-color-picker
		v-model="model"
		:predefine="predefineColors"
		show-alpha
		:class="customClassList"
		:id="id"
	></el-color-picker>
</template>

<script setup lang="ts">
import type {PublicColorPickerModel} from "~/types/form";

const model: Ref<string> = defineModel({required: true});

withDefaults(defineProps<PublicColorPickerModel>(), {
	hasLabel: true
})

const predefineColors = [
	'#ff4500',
	'#ff8c00',
	'#ffd700',
	'#90ee90',
	'#00ced1',
	'#1e90ff',
	'#c71585',
	'rgba(255, 69, 0, 0.68)',
	'rgb(255, 120, 0)',
	'hsv(51, 100, 98)',
	'hsva(120, 40, 94, 0.5)',
	'hsl(181, 100%, 37%)',
	'hsla(209, 100%, 56%, 0.73)',
	'#c7158577',
]
</script>

<style scoped>

</style>