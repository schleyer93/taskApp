import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private readonly storageKey = 'taskApp_tasks';

  constructor() {
    this.loadTasks();
  }

  private loadTasks(): void {
    const tasksJson = localStorage.getItem(this.storageKey);
    if (tasksJson) {
      this.tasks = JSON.parse(tasksJson);
    } else {
      this.tasks = [
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
        }
      ];
      this.saveTasks();
    }
  }

  private saveTasks(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    task.status = 'Por completar';
    this.tasks.push(task);
    this.saveTasks();
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  updateTaskStatus(index: number, status: 'Por completar' | 'En proceso' | 'Completada'): void {
    this.tasks[index].status = status;
    this.saveTasks();
  }
}
