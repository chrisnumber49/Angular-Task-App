import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // like in React.js, it declare props passed from parent component 
  // ! or ? comes from the new Ts compiler, have to tell compiler this property is optional or required
  @Input() color!: string;
  @Input() text!: string;
  // EventEmitter let outside decide what to do with this method
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  // reusable method in class, btnClick will be emitted to let outside decide what to do when click the button
  onClick() {
    this.btnClick.emit();
  }

}
