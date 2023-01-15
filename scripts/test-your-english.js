const draggables = document.querySelectorAll("#draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging")
    })
    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging")
    })
})

const dragOver = containers.forEach (container => {
        container.addEventListener("dragover", e => {
            e.preventDefault()
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelectorAll("#draggable");
            container.appendChild(draggable)
        });
    })
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('draggable:not(.dragging)')]
    draggableElements.reduce()
}
