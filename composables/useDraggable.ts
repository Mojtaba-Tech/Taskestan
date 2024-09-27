import type {HTMLElementRolesModel} from "~/types/roles";

export default function useDraggable() {
  const makeEditorDraggable = () => {
    const container = document.querySelector('#editor_draggable_area_container') as HTMLElement;

    let isDown = false;
    let startX: number, startY: number, scrollLeft: number, scrollTop: number;
    let offsetX = 0, offsetY = 0;

    container.addEventListener('mousedown', (event: MouseEvent) => {
      const HTMLElement = event.target as HTMLElement
      const HTMLElementRole: HTMLElementRolesModel = HTMLElement.dataset.elementRole as HTMLElementRolesModel

      if (HTMLElementRole === "editor-draggable-area") {
        isDown = true;
        container.classList.add('active');
        startX = event.pageX - container.offsetLeft;
        startY = event.pageY - container.offsetTop;
        scrollLeft = container.scrollLeft;
        scrollTop = container.scrollTop;
      } else if (HTMLElementRole === 'note') {
        offsetX = event.clientX - (event.currentTarget as HTMLElement).getBoundingClientRect().left;
        offsetY = event.clientY - (event.currentTarget as HTMLElement).getBoundingClientRect().top;
      }
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
      container.classList.remove('active');
    });

    container.addEventListener('mousemove', (event) => {
      if (!isDown) return;
      event.preventDefault();

      const HTMLElement = event.target as HTMLElement
      const HTMLElementRole: HTMLElementRolesModel = HTMLElement.dataset.elementRole as HTMLElementRolesModel

      if (HTMLElementRole === "editor-draggable-area") {

        const x = event.pageX - container.offsetLeft;
        const walkX = (x - startX) * 1.4;
        const y = event.pageY - container.offsetTop;
        const walkY = (y - startY) * 1.4;
        container.scrollLeft = scrollLeft - walkX;
        container.scrollTop = scrollTop - walkY;

      } else if(HTMLElementRole === "note") {
        HTMLElement.style.top = `${event.clientY - offsetY}px`;
        HTMLElement.style.left = `${event.clientX - offsetX}px`;

      }
    });
  }

  return {
    makeEditorDraggable
  }
}