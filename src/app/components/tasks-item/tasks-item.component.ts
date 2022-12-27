import { Component, Input } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent {
  @Input() task: Task = TASKS[0];
  faTimes = faTimes;
  color = "red"

  onClick() {
    alert("sure you want to delete entrie?")
  }
}
