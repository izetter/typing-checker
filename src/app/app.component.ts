import { Component } from '@angular/core';
import { lorem } from 'faker';
// After installing faker, had to additonally do "npm i @types/faker" to enable its use.


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText: string = lorem.sentence();
  enteredText: string = '';

  storeInput(input: string){
    this.enteredText = input;
    // console.log(input);
  }
}
