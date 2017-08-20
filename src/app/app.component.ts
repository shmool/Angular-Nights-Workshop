import { Component } from '@angular/core';

@Component({
  selector: 'ngn-root',
  template: `
    <h1>{{ title }} {{ getName() }} works</h1>

    <ngn-input #myCustomInput [initialValue]="title" (titleClick)="log($event, myCustomInput)"></ngn-input>

    <input #myInput [value]="title" (keyup.enter)="changeTitle(myInput)">
    <button (click)="changeTitle(myInput)">Submit</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngn';

  constructor() {
    setTimeout(() => {
      this.title = 'Hello!';
    }, 2000);
  }

  log(e, r) {
    console.log(e, r);
  }

  changeTitle(inputEl) {
    this.title = inputEl.value;
  }

  getName() {
    return 'Angular Nights';
  }
}
