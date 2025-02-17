import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    {
      title: 'Revisar correos electrónicos',
      description: 'Revisar y responder correos pendientes.',
      status: 'Por completar'
    },
    {
      title: 'Hacer la compra semanal',
      description: 'Comprar alimentos y productos de limpieza.',
      status: 'En proceso'
    },
    {
      title: 'Preparar presentación del proyecto',
      description: 'Preparar la presentación para la reunión del viernes.',
      status: 'Completada'
    },
    {
      title: 'Hacer ejercicio',
      description: 'Ir al gimnasio o salir a correr.',
      status: 'Por completar'
    },
    {
      title: 'Leer un libro',
      description: 'Leer al menos un capítulo del libro actual.',
      status: 'En proceso'
    }
  ];

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    task.status = 'Por completar';
    this.tasks.push(task);
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  updateTaskStatus(index: number, status: 'Por completar' | 'En proceso' | 'Completada'): void {
    this.tasks[index].status = status;
  }

}
