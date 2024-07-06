<template>
	<div class="bg-gray-100">
		
		<!-- Navigation -->
		<nav class="h-screen fixed top-0 left-0 w-[268px] p-3 bg-gray-100">
			
			<!-- Top Section -->
			<section class="flex items-center justify-between">
				<img src="@/public/icon.png" alt="icon" width="16">
				<IconsSectionLeft/>
			</section>
			<!-- End Top Section -->
			
			<!-- Menu Links -->
			<ul>
				<li>
					<NuxtLink to="/">Boards</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/">Changelog</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/">Setting</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/">Support and Guide</NuxtLink>
				</li>
			</ul>
			<!-- End Menu Links	-->
		
		</nav>
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

</script>