<template>
	<div class="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
		<div class="bg-white rounded-lg w-96 p-4 mb-1">
			<img src="/icon.png" class="w-10 mx-auto" alt="Taskestan icon">
			<h1 class="text-center text-lg py-3 font-bold">Login</h1>
			<input
				v-model="form.email"
				type="text"
				class="w-full outline-0 border border-gray-300 rounded-lg px-4 py-3.5 mb-2"
				placeholder="Email"
			/>
			<input
				v-model="form.password"
				type="password"
				class="w-full outline-0 border border-gray-300 rounded-lg px-4 py-3.5 mb-4"
				placeholder="Password"
			/>
			<PublicButton
				button-text="Login"
				:custom-class-list="['w-full']"
				:clicked="signIn"
			/>
		</div>
		<NuxtLink to="/auth/signup" class="text-blue-500">
			Do you have no account? signup first
		</NuxtLink>
	</div>
</template>
<script setup lang="ts">
// todo: should be added in login page

const form = {
	email: '',
	password: ''
}

const supabase = useSupabaseClient()
const signInWithOAuth = async () => {
	const {error} = await supabase.auth.signInWithOAuth({
		provider: 'github',
		options: {
			redirectTo: 'http://localhost:3005/app/boards/boards-list',
		},
	})
	if (error) console.log(error)
}

onBeforeMount(async () => {

	

})

async function checkDoesUserLogged() {
	const {data: {user}} = await useSupabaseClient().auth.getUser()
	
	// console.log("--->", user, !!user)
	return !!user;
}

definePageMeta({
	middleware: async function() {
		const {data: {user}} = await useSupabaseClient().auth.getUser()
		const isUserLogged = !!user

		if(isUserLogged) {
			return navigateTo('/app/boards/boards-list')
		}
	}
})

onMounted(() => {
	// signInWithOAuth()
})

const signIn = async () => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: form.email,
		password: form.password,
	})
	// console.log("sign in -> ", data, error)
	if(!error) {
		navigateTo('/app/boards/boards-list')
	} else {
		alert(error)
	}
}
</script>