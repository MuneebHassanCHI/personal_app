import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { BlogModule } from './blog/blog.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BaseComponent } from './base-component/base.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AboutComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    HttpClientModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
