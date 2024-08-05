<template>
	<nav class="px-3 bg-gray-100 py-2.5">
		
		<!-- Menu Links -->
		<ul class="flex justify-center">
			<li class="mx-2">
				<NuxtLink
					:to="{name: 'app-boards-boards-list'}"
					class="transition"
				>
					<IconsMultipleCard4
						:color="getIconColor('app-boards-boards-list')"
						class="transition"
					/>
				</NuxtLink>
			</li>
			<li class="mx-2">
				<NuxtLink
					:to="{name: 'app-settings-settings'}"
					class="transition"
				>
					<IconsSetting3
						:color="getIconColor('app-settings-settings')"
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