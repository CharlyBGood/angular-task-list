import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task List';
  color:string = "#000110"

  toggleAddTask() {
    alert('clickeaste wach');
  }
}
