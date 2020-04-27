import { Component, OnInit, Input } from '@angular/core';
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

  resetArticle() {
    this.article = {
      id: null,
      title: '',
      tag: '',
      author: '',
      date: '',
      imgUrl: '',
      content: ''
    }
  }


  articlesList: Article[];
  isOpen: boolean = false;
  article: Article;
  
  @Input() art : Article;

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

  editArticle(id: number, article: Article) {

    this.article = article;
    this.isOpen = !this.isOpen;

    this.articleService.editArticle(this.article).subscribe((response=> {

    }))
  }
  
  saveArticle(article: Article) {
    this.article = article;
    if(this.article.id == null) {
      // this.resetArticle();
      this.articleService.postArticle(this.article).subscribe(response => {
        this.getArticles();
        this.isOpen = false;
  })
} else {
  this.articleService.editArticle(this.article).subscribe(response => {
   this.getArticles();
    this.isOpen = false;
  })
  }
  this.resetArticle();
}

}
