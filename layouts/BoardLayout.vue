<template>
	<div class="bg-gray-100">
		
		<!-- Navigation -->
		<BoardLayoutNavigation/>
		<!-- End Navigation -->
		
		<!-- Page Content -->
		<main class="ml-[268px] p-1.5">
			<section class="rounded-lg bg-white p-16 h-[calc(100vh-12px)] overflow-auto shadow-1">
				<slot/>
			</section>
		</main>
		<!-- End Page Content -->
		
	</div>
</template>

<script setup>

import BoardLayoutNavigation from "~/components/board/BoardLayoutNavigation.vue";
</script>