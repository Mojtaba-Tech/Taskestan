<template>
	<nav class="flex justify-center items-center h-9">
		
		<!-- Menu Links -->
		<ul class="flex justify-center">
			<li class="mx-2">
				<NuxtLink
					:to="{name: 'app-boards-list'}"
					class="transition"
				>
					<IconsMultipleCard4
						:color="getIconColor('app-boards-list')"
						class="transition"
					/>
				</NuxtLink>
			</li>
			<li class="mx-2">
				<NuxtLink
					:to="{name: 'app-settings'}"
					class="transition"
				>
					<IconsSetting3
						:color="getIconColor('app-settings')"
						class="transition"
					/>
				</NuxtLink>
			</li>
		</ul>
		<!-- End Menu Links	-->
	
	</nav>
</template>

<script setup lang="ts">
const route = useRoute()

const getIconColor = (routeName: string) => {
	const isRouteMatched = route.matched.some((matchedItem) => matchedItem.name === routeName)
	// console.log("isRouteMatched", isRouteMatched)
	return isRouteMatched ? '#2386F8' : '#C6C7CE'
}
</script>

<style lang="scss" scoped>

</style>