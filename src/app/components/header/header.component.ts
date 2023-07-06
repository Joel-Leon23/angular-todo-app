import { UiService } from './../../services/ui.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Task Tracker'
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) { }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }
}
