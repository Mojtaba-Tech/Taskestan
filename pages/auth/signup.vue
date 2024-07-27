<template>
	<div class="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
		<div class="bg-white rounded-lg w-96 p-4 mb-1">
			<img src="/icon.png" class="w-10 mx-auto" alt="Taskestan icon">
			<h1 class="text-center text-lg py-3 font-bold">SignUp</h1>
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
				button-text="SignUp"
				:custom-class-list="['w-full']"
			/>
		</div>
		<NuxtLink to="/auth/login" class="text-blue-500">
			Do you have an account already? login first
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">

</script>