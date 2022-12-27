import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();

  onClick() {
    // alert('clickeaste');
    this.btnClick.emit();

    // estp ára mostrar que desde ambos componentes se puede modificar su comportamiento -button-o-header
    // this.color = 'red';
  }
}
