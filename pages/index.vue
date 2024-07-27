<template>
	<div>
	</div>
</template>

<script setup lang="ts">
onBeforeMount(() => navigateTo({name: 'app-boards-boards-list'}))

// todo: should be added in login page
// const supabase = useSupabaseClient()
// const signInWithOAuth = async () => {
// 	const {error} = await supabase.auth.signInWithOAuth({
// 		provider: 'github',
// 		options: {
// 			redirectTo: 'http://localhost:3005/confirm',
// 		},
// 	})
// 	if (error) console.log(error)
// }
// signInWithOAuth()
</script>