import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogNames: string[];
  constructor() { 
    this.blogNames = ['blog1', 'blog2'];
  }

  ngOnInit(): void {
  }

}
