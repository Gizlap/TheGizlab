import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private projectService: ProjectService;

  projects: Project[];

  selectedProject: Project;

  constructor(ps: ProjectService) { 
    this.projectService = ps;
  }

  ngOnInit() {
    this.getProjects();
  }

  onSelect(project: Project){
    this.selectedProject = project;
  }

  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

}
