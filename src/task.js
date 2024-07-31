//lista de tareas
let task = JSON.parse(localStorage.getItem('tasks')) || [];

// Funcion para agregar tareas
export const addTask = (task) => {
    const newTask ={
        id: Date.now(),
        text: task,
        completed: false,
   };
   tasks.push(newTask);
   localStorage.setItem('tasks', JSON.stringify(tasks)); 
};

//funcion para poder traer la lista de tareas 
export const getTasks = () => tasks;