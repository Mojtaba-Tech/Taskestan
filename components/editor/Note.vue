<template>
	<section
		class="absolute flex flex-col py-4 pl-6 pr-5 rounded-lg w-52 min-h-52"
		:style="{top, left, background}"
	>
		<p class="text-black/75 font-medium text-sm mb-8">
			{{text}}
		</p>
		<img
			src="https://i.pravatar.cc/20"
			class="w-5 h-5 object-cover rounded-full mt-auto ml-auto"
			alt="writer avatar"
		>
	</section>
</template>

<script setup lang="ts">
defineProps<{
	top: string,
	left: string,
	background: string,
	text: string
}>()
</script>

<style scoped>

</style>