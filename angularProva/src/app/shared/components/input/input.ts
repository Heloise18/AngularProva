import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ CommonModule,FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
  standalone: true

})
export class Input_ {
  value: string = ""
  
  @Output()
  change:EventEmitter<string> = new EventEmitter() 

  @Input()
  placeholder: string = ""

  



}
