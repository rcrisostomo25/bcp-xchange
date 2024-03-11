import { Component, OnInit, inject } from '@angular/core';
import { DashboardController } from '../../application/dashboard-controller';
import { ITeamMembers } from '../../../../shared/models/team-members.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  providers: [DashboardController]
})
export class MainComponent implements OnInit {

  private dashboardController = inject(DashboardController);

  public teamMembers: ITeamMembers[] = [];

  ngOnInit(): void {
    this.dashboardController.getTeamMembers().subscribe((teamMembers) => {
      this.teamMembers = teamMembers;
    });
  }

  colorPerfil(perfil: string): string {
    switch(perfil) {
      case 'Product Owner':
        return 'warning';
      case 'Scrum Master':
        return 'warning';
      case 'Java':
        return 'danger';
      case '.NET':
        return 'info';  
      case 'Mainframe':
        return 'success';
      case 'QA':
        return 'primary';  
    }
    return '';
  }
}
