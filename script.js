//Info Date
const dateNumber = document.getElementById('dateNumber')
const dateText = document.getElementById('dateText')
const dateMonth = document.getElementById('dateMonth')
const dateYear = document.getElementById('dateYear')

//Tasks Container
const tasksContainer = document.getElementById('tasksContainer')

const setDate = () =>{
    const date = new Date();
    dateNumber.textContent = date.toLocaleDateString('es', {day: "numeric"})
    dateText.textContent = date.toLocaleDateString('es', {weekday: 'long'})
    dateMonth.textContent = date.toLocaleDateString('es', {month: 'short'})
    dateYear.textContent = date.toLocaleDateString('es', {year: 'numeric'})
}


//Nueva tarea
const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    //Agregar clases
    task.classList.add('task', 'roundBorder');
    //Escucha el click y ejecuta changeTaskState
    task.addEventListener('click', changeTaskState)
    //Agrega el text
    task.textContent = value;
    //Agrega al principio
    tasksContainer.prepend(task);
    //Reiniciar el form
    event.target.reset();
}

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];

    //Acceder a los hijos
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}


const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

setDate();