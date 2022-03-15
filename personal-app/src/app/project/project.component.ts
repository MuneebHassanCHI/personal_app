import { Component, OnInit } from '@angular/core';
import { projectDetail } from '../models';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: projectDetail[]
  constructor() {
    this.projects = [{title: "Project 1",
    description: "It was my first project"}]
   }

  ngOnInit(): void {
  }

}
