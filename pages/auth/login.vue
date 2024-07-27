<template>
	<div class="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
		<img src="/icon.png" alt="Taskestan icon">
		<div class="bg-white rounded-lg w-96 p-4">
			<input
				type="text"
				class="w-full outline-0 border border-gray-300 rounded-lg px-4 py-3.5 mb-2"
				placeholder="Email"
			/>
			<input
				type="password"
				class="w-full outline-0 border border-gray-300 rounded-lg px-4 py-3.5 mb-4"
				placeholder="Password"
			/>
			<PublicButton
				button-text="Login"
				:custom-class-list="['w-full']"
			/>
		</div>
	</div>
</template>
<script setup lang="ts">
</script>