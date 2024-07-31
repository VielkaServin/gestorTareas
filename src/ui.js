// importar funciones traer de afuera
import {getTasks } from './task';

export const renderTasks = () => {
    const tasksList = document.getElementById("task-list"); // se hizo una variable
    tasksList.innerHTML = "";
}