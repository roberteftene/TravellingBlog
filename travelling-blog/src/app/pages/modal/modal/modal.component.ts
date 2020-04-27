import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
  }

  
  @Input() article: Article;
  articleList: Article[];
  isOpen = true;

  @Input() modal: Article;
  @Output() triggerGetArticles = new EventEmitter();
  @Output() triggerSendArticle = new EventEmitter();
  
  // article ={} as Article;

  closeModal() {
    this.isOpen = !this.isOpen;
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


  onSave() {
    this.triggerSendArticle.emit(this.article);
   
    this.resetArticle();
    this.isOpen = false;
  }

}
 