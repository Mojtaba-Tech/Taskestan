import {defineStore} from "pinia";

export const useDragAndDropStore = defineStore('drag-and-drop', () => {
  const isDraggingSomething = ref(false);

  return {
    isDraggingSomething
  };
})