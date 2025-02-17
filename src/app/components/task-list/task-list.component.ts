import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];


  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  public tasksMap = {
    '=1': ' # tarea',
    'other': ' # tareas'
  }

  navigateToForm() {
    this.router.navigate(['/form']);
  }

  deleteTask ( index: number): void {
    this.taskService.deleteTask(index)
  }

  updateTaskStatus(index: number, status: 'Por completar' | 'En proceso' | 'Completada'): void {
    this.taskService.updateTaskStatus(index, status);
  }

  getPendingTasksCount(): number {
    return this.tasks.filter(task => task.status === 'En proceso').length;
  }

  getToCompleteTasksCount(): number {
    return this.tasks.filter(task => task.status === 'Por completar').length;
  }

  getCompletedCount(): number {
    return this.tasks.filter(task => task.status === 'Completada').length;
  }

}
