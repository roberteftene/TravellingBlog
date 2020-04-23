import { Component } from '@angular/core';

interface ArrayOfDogs {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travelling';

  constructor() { }

  ngOnInit(): void {
  }

  arrayOfDogs: string[] = [];
  inputText: string = ""
  index: number = 0;

  addDog() {
    this.arrayOfDogs = [...this.arrayOfDogs,this.inputText];
    this.index++;
    this.inputText = "";
  }
 
}
