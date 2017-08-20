import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngn-input',
  template: `
    <p>
      input Works!
    </p>
    <h1 (click)="clickedOnTitle($event)">{{ initialValue }}</h1>
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() initialValue;
  @Output() titleClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  clickedOnTitle(bla) {
    this.titleClick.emit('success');
  }

  ngOnInit() {
  }

}
