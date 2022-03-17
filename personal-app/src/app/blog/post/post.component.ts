import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  name: string | null;
  fileName: string;
  constructor( private route: ActivatedRoute) { 
    this.name = this.route.snapshot.paramMap.get('name');
    this.fileName = './assets/blogs/' + this.name + '.md';
  }

  ngOnInit(): void {    
  }

}
