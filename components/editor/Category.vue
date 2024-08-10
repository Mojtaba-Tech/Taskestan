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
			<div
				v-for="i in 5"
				class="bg-white border border-black/10 rounded-lg p-6 shadow-2 mb-3"
			>
				<h3 class="text-13 text-gray-700 font-normal mb-1">
					Enhance browser section
				</h3>
				<span class="text-xs text-gray-300">
					Oct 29 - Oct 30
				</span>
				<div class="flex items-center justify-end pt-16">
					<PublicTag
						text="New"
						:theme="color as 'cyan' | 'orange' | 'red' | 'green'"
					/>
				</div>
			</div>
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