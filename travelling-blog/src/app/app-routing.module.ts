import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './pages/articles-list/articles-list.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';


const routes: Routes = [
  {path: 'articles', component: ArticlesListComponent},
  {path: 'articles/:id', component: ArticleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
