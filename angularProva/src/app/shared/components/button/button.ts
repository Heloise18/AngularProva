import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
  standalone: true
})
export class Button {
  @Output()
  onClick: EventEmitter<void> = new EventEmitter()

  @Input()
  title: string = ""


  clicked = () => {
    this.onClick.emit()
  }
}
