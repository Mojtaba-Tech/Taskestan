<template>
	<div>
	
	</div>
</template>

<script setup lang="ts">
onBeforeMount(() => navigateTo({name: 'app-boards-boards-list'}))
const router = useRouter()
console.log(router.getRoutes())
</script>