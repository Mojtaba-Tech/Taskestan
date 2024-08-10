<template>
	<div class="w-64 select-none mr-4">
		
		<!-- Category Title -->
		<header class="inline-flex justify-between items-center mb-3">
			<div class="flex justify-between items-center mr-20">
				<div class="mr-3.5">
					<IconsArrowDown color="#58585C"/>
				</div>
				<PublicTag
					:theme="color as 'cyan' | 'orange' | 'red' | 'green'"
					:custom-class-list="['mr-2']"
				/>
				<h2 class="text-13 text-gray-700 whitespace-nowrap">
					Getting Start
				</h2>
			</div>
			<div class="cursor-pointer mr-1">
				<IconsPlus color="#848589"/>
			</div>
		</header>
		<!-- End Category Title -->
		
		<!-- Tasks List -->
		<section>
			
			<!-- Task Item -->
			<template	v-for="i in 3">
				<EditorTask :color="color" />
			</template>
			<!-- End Task Item -->
		
		</section>
		<!-- End Tasks List -->
	
	</div>
</template>

<script setup lang="ts">
defineProps<{
	color: string
}>()
</script>

<style scoped>

</style>