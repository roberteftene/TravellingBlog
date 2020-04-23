import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() dogName: string;

}
