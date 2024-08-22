// importar funciones traer de afuera
import {getTasks } from './task';

export const renderTasks = () => {
    const tasksList = document.getElementById("task-list"); // se hizo una variable
    tasksList.innerHTML = "";

    const tasks = getTasks();  //agregar elementos de lista lu o il para una cantidad indfefinida
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        //Añadir clase solo si la tarea esta completada
        if(task.completed === true) {
            li.classList.add("completed");
        };
                //hacer cambios en el html crear variables
        li.innerHTML = `
            ${task.text}
            <button class="delete"> Eliminar </button>
            <button class= ${ task.completed === false? "toggle" : "undo"} > ${ task.completed === false? "Completar" : "Deshacer"} </button>  
        `; // boton con texto dinamico dependiendo de una variable true y false
        
        tasksList.appendChild(li);
   
    });

};