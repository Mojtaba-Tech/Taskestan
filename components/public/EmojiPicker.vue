<template>
	<div>
		<label
			v-if="hasLabel"
			:for="id"
			class="flex text-gray-600 font-semibold mb-1"
		>{{ labelText }}</label>	<NuxtEmoji @onSelect="(emoji: string) => model = emoji">
		<template #button>
			<slot name="button" :emoji="model" :id="id" />
		</template>
	</NuxtEmoji>
	</div>
</template>

<script setup lang="ts">
import type {PublicEmojiPickerModel} from "~/types/form";

withDefaults(defineProps<PublicEmojiPickerModel>(), {
	hasLabel: true
})

const model: Ref<string> = defineModel({required: true});
</script>