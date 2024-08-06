<template>
	<div class="bg-gray-50">
		
		<!-- Navigation -->
		<EditorLayoutNavigation/>
		<!-- End Navigation -->
		
		<!-- Page Content -->
		<main class="px-1.5 pb-1.5">
			<section class="rounded-lg bg-white p-2 min-h-[calc(100vh-44px)] shadow-1 border border-black/10">
				<slot/>
			</section>
		</main>
		<!-- End Page Content -->
		
	</div>
</template>

<script setup lang="ts">

</script>