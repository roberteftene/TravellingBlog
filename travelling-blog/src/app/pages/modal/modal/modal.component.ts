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

  
  article = new Article();
  articleList: Article[];
  isOpen = true;

  @Input() modal: Article;
  @Output() triggerGetArticles = new EventEmitter();

  closeModal() {
    this.isOpen = !this.isOpen;
  }


  onSave() {
    this.articleService.postArticle(this.article).subscribe(response => {
      this.isOpen = false;
      this.triggerGetArticles.emit();
    })
  }



}
