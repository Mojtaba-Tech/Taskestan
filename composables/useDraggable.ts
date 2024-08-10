export default function useDraggable() {
  const makeEditorDraggable = () => {
    const container = document.querySelector('#editor_draggable_area_container') as HTMLElement;

    let isDown = false;
    let startX: number, startY: number, scrollLeft: number, scrollTop: number;

    container.addEventListener('mousedown', (e) => {
      if ((e.target as HTMLElement).id === "editor_draggable_area") {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        startY = e.pageY - container.offsetTop;
        scrollLeft = container.scrollLeft;
        scrollTop = container.scrollTop;
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

    container.addEventListener('mousemove', (e) => {
      if ((e.target as HTMLElement).id === "editor_draggable_area") {

        if (!isDown) return;
        e.preventDefault();

        const x = e.pageX - container.offsetLeft;
        const walkX = (x - startX) * 1.4;
        const y = e.pageY - container.offsetTop;
        const walkY = (y - startY) * 1.4;
        container.scrollLeft = scrollLeft - walkX;
        container.scrollTop = scrollTop - walkY;
      }
    });
  }

  return {
    makeEditorDraggable
  }
}