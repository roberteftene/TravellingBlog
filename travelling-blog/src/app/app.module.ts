import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './pages/articles-list/articles-list.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { ArticleService } from './services/article.service';
import { ModalComponent } from './pages/modal/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleDetailsComponent,
    DogsComponent,
    ModalComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule, ArticleService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
