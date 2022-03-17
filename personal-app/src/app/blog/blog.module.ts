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
        RouterModule.forRoot(routes),
        MarkdownModule.forRoot({ loader: HttpClient }),
        HttpClientModule
        // CommonModule,
        // RouterModule.forChild([
        // {path: '', pathMatch: 'full',
        //             loadChildren: './blog/blog-view.module#BlogViewModule'},
        // {path: 'post', 
        //             loadChildren: './post/blog-post-view.module#BlogPostViewModule'},
        // ]),
        // MarkdownModule.forRoot()
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
