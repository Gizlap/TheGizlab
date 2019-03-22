import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private messageService: MessageService;

  constructor(ms: MessageService) {
    this.messageService = ms;
  }

  getProjects(): Project[] {
    this.messageService.add("ProjectService: fetched projects");
    return PROJECTS;
  }
}
