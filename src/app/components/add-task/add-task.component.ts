import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  mark: string = 'Mark as important!';

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddForm: boolean = false;
  subscription?: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddForm = value));
  }

  onSubmit() {
    if (this.text.length === 0) {
      alert('Please add a task!');
      return;
    }
    const { text, day, reminder } = this;
    const newTask = { text, day, reminder };
    this.onAddTask.emit(newTask);
  }
}
