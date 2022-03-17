import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projectDetail } from '../models';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: projectDetail[]
  name: string | null;
  constructor(private route: ActivatedRoute) {
    this.projects = [{title: "Project 1",
      description: "It was my first project",
      file: './assets/projects/project1.md'}
    ]
    this.name = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    console.log("this.name", this.name);
  }
}
