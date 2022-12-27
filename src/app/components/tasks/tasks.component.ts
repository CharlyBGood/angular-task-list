import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // this is like a promise
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    if (confirm('are you sure to delete task ' + task.id + '?')) {
      this.taskService.deleteTask(task).subscribe(() => {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      });
    } 
  }
}
