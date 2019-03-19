import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../mock-projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = PROJECTS;

  selectedProject: Project;

  constructor() { }

  ngOnInit() {
  }

  onSelect(project: Project){
    this.selectedProject = project;
  }

}
