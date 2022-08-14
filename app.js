const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart); // dragstart - начало события перетаскивания 
item.addEventListener('dragend', dragEnd); // dragend - конец события перетаскивания 

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragOver) // событие, когда ячейка находится над блоком placeholder при перемещении 
    placeholder.addEventListener('dragenter', dragEnter) // событие, когда ячейка заходит на новый блок при перемещении
    placeholder.addEventListener('dragleave', dragLeave) // событие, когда ячейка вышла из блока
    placeholder.addEventListener('drop', dragDrop) // событие, когда мы отпустили ячейку 
}

function dragStart  (event)  { //event.target - сам элемент
  event.target.classList.add('hold')  
  setTimeout(() => event.target.classList.add('hide'), 0)
  
}

function dragEnd (event)  {
    event.target.classList.remove('hold', 'hide')
}

function dragOver (event)  {
    event.preventDefault()
}

function dragEnter (event)  {
    event.target.classList.add('hovered') 
}

function dragLeave  (event)  {
    event.target.classList.remove('hovered') 
}

function dragDrop (event)  {
    event.target.classList.remove('hovered') 
    event.target.append(item) // добавляем класс item к placeholder'у 
}