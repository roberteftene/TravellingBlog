import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  [x: string]: any;

  private routeSub: Subscription;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
    
  ) { }

  article: Article;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticleById(this.id).subscribe((response:Article) => {
      this.article = response;
    })
  }
    ngOnDestroy() {
      this.routeSub.unsubscribe();
    }

// @Input() article: Article;




// getArticleById() {
//   this.articleService.getArticleById(this.article).subscribe((response) => {
//     this.article = response;
//     console.log("Test: "+  response.title);
//   })
// }

}
