import { Component, OnInit } from '@angular/core';

interface Article {
 title: string,
content: string
}

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  article: Article[] = [
    {
      title: 'Primul articol',
      content: 'Lorem ipsum'
    },

  ]

  

}
