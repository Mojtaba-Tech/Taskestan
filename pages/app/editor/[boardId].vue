<template>
	<div>
		<EditorToolbar/>
		<EditorArea/>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'editor-layout'
})

const settingsStore = useSettingsStore()

onBeforeMount(async () => await settingsStore.getSettings())
</script>

<style scoped>

</style>