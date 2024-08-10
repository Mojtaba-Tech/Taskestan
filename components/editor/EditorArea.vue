<template>
	<section
		id="editor_area"
		class="h-[calc(100vh-104px)] overflow-hidden px-2"
		:class="isEditorBgDotsActive && 'has-dots-bg'"
	>
		
		<div
			id="editor_draggable_area_container"
			class="h-full overflow-auto mb-36 outline-none"
		>
			<div
				id="editor_draggable_area"
				class="flex h-[10000px] w-[10000px] cursor-pointer"
			>
				
				<!-- Category -->
				<template
					v-for="color in ['cyan', 'green', 'orange', 'red', 'cyan']"
				>
					<EditorCategory :color="color" />
				</template>
				<!-- End Category -->
			
			</div>
		</div>
	
	</section>
</template>

<script setup lang="ts">
const settingsStore = useSettingsStore()
const settingsStoreRefs = storeToRefs(settingsStore)
const isEditorBgDotsActive = settingsStoreRefs.isEditorBgDotsActive

const {makeEditorDraggable} = useDraggable()

onMounted(makeEditorDraggable)
</script>

<style scoped lang="scss">
#editor_area {
	position: relative;
	z-index: 1;
	
	&:before {
		content: "";
		position: absolute;
		//background-image: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQwIDQwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPgoJPHRpdGxlPk5ldyBQcm9qZWN0PC90aXRsZT4KCTxkZWZzPgoJCTxpbWFnZSAgd2lkdGg9IjQiIGhlaWdodD0iNCIgaWQ9ImltZzEiIGhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBRUFRTUFBQUNUUHd3OUFBQUFBWE5TUjBJQjJja3Nmd0FBQUFOUVRGUkY2ZW5wVnlQRWpBQUFBQXhKUkVGVWVKeGpaR0FFUXdBQUhBQUZTSlpQdkFBQUFBQkpSVTVFcmtKZ2dnPT0iLz4KCTwvZGVmcz4KCTxzdHlsZT4KCTwvc3R5bGU+Cgk8dXNlIGlkPSJCYWNrZ3JvdW5kIiBocmVmPSIjaW1nMSIgeD0iMCIgeT0iMCIvPgo8L3N2Zz4=");
		background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzYzMzZfNTIyOTIpIj4KPGcgb3BhY2l0eT0iMC43NSI+CjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNFOEU5RUUiLz4KPHJlY3QgeD0iMTgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNFOEU5RUUiLz4KPHJlY3QgeT0iMTgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNFOEU5RUUiLz4KPHJlY3QgeD0iMTgiIHk9IjE4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjRThFOUVFIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF82MzM2XzUyMjkyIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");
		background-repeat: repeat;
		background-size: 16px;
		background-position: 2px 2px;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: -1;
		transition: all 0.4s;
	}
	
	&.has-dots-bg:before {
		opacity: 1;
	}
}
</style>