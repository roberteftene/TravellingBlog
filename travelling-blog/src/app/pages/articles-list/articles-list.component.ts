import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  ngOnInit(): void {
    this.getArticles();
  }

  articlesList: Article[];
  isOpen: boolean = false;

  constructor(
     private articleService: ArticleService
  ) {}
  
  getArticles() {
    this.articleService.getArticles().subscribe((response) => {
      this.articlesList = response;
    })
  }

  openModal() {
    this.isOpen = !this.isOpen;
  }
  
  deleteArticle(id: number) {
    this.articleService.deleteArticle(id).subscribe((response) => {
      this.getArticles();
    })
  }
  

}
