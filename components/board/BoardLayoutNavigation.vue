<template>
	<nav class="h-screen fixed top-0 left-0 w-[268px] px-3 py-4 bg-gray-100">
		
		<!-- Top Section -->
		<section class="flex items-center justify-between mb-4">
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
</template>

<script setup lang="ts">

</script>