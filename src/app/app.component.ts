import { Component } from '@angular/core';
import { lorem } from 'faker';
// After installing faker, also did "npm i @types/faker" for better usability.


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
  }

  matchChecker(A: string, B: string) {
    if (B === undefined) {  // " if (!B) ..." would also work
      return 'pending';
    }
    return A === B ? 'match' : 'no-match';
  }

  restart(){
    this.randomText = lorem.sentence();
    document.querySelector('input').value = '';   // How to do these two lines of code but with Angular tools?
    document.querySelector('input').focus();
  }
}
