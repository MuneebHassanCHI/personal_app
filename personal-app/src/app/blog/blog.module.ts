import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MarkdownModule } from "ngx-markdown";
import { BlogComponent } from "./blog.component";
import { PostComponent } from "./post/post.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', component: BlogComponent},
    {path: 'post', component: PostComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MarkdownModule.forRoot({ loader: HttpClient }),
        HttpClientModule
    ],
    declarations: [
        BlogComponent,
        PostComponent
    ],
    exports: [
        BlogComponent,
    ],
    providers: [
        
    ]

})
export class BlogModule{}
