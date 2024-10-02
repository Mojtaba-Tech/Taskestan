<template>
	<section
		id="editor_area"
		class="h-[calc(100vh-104px)] overflow-hidden px-2"
		:class="isEditorBgDotsActive && 'has-dots-bg'"
	>
		
		<div
			id="editor_draggable_area_container"
			ref="editorArea"
			class="h-full overflow-auto mb-36 outline-none"
			:style="{}"
			@mousedown="startEditorDrag"
		>
			<div
				id="editor_draggable_area"
				class="relative flex h-[10000px] w-[10000px] cursor-pointer"
				data-element-role="editor-draggable-area"
			>
				
				<!-- Category -->
				<!--<section class="relative z-10">-->
				<!--	<EditorCategory-->
				<!--		v-for="color in ['red', 'cyan']"-->
				<!--		:color="color"-->
				<!--		:x="100"-->
				<!--		:y="50"-->
				<!--	/>-->
				<!--</section>-->
				<!-- End Category -->
				
				<EditorNoteListContainer />
			
			</div>
		</div>
	
	</section>
</template>

<script setup lang="ts">
// settings store
const settingsStore = useSettingsStore()
const settingsStoreRefs = storeToRefs(settingsStore)
const isEditorBgDotsActive = settingsStoreRefs.isEditorBgDotsActive

// make editor draggable using useEditorDraggable composable
const editorArea = ref<HTMLElement | null>(null) as Ref<HTMLElement>;
const {startEditorDrag} = useEditorDraggable(editorArea)

</script>

<style scoped lang="scss">
#editor_area {
	position: relative;
	z-index: 1;
	
	&:before {
		content: "";
		position: absolute;
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