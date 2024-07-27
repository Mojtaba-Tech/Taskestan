<template>

</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const logout = await supabase.auth.signOut()

console.log("logout", logout)
</script>

<style scoped lang="scss">

</style>