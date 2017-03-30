import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { RepoItemComponent } from './repo-item/repo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchResultItemComponent,
    RepoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
