export default function useEditorDraggable(editor: Ref<HTMLElement>) {
  // drag and drop store
  let {isDraggingSomething} = storeToRefs(useDragAndDropStore())

  // Editor scroll variables
  let editorStartScroll = {x: 0, y: 0};
  let editorMouseStart = {x: 0, y: 0};
  let isEditorDragging = false;

  // Handle dragging the editor for scrolling
  const startEditorDrag = (e: MouseEvent) => {
    if (!isDraggingSomething.value) {
      isEditorDragging = true;
      editorStartScroll = {x: editor.value.scrollLeft, y: editor.value.scrollTop};
      editorMouseStart = {x: e.clientX, y: e.clientY};
      document.addEventListener('mousemove', dragEditor);
      document.addEventListener('mouseup', stopEditorDrag);
    }
  };

  const dragEditor = (e: MouseEvent) => {
    if (isEditorDragging) {
      editor.value.scrollLeft = editorStartScroll.x - (e.clientX - editorMouseStart.x);
      editor.value.scrollTop = editorStartScroll.y - (e.clientY - editorMouseStart.y);
    }
  };

  const stopEditorDrag = () => {
    isEditorDragging = false;
    document.removeEventListener('mousemove', dragEditor);
    document.removeEventListener('mouseup', stopEditorDrag);
  };

  // Clean up event listeners when the component is destroyed
  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', dragEditor);
    document.removeEventListener('mouseup', stopEditorDrag);
  });

  return {
    startEditorDrag
  }
}