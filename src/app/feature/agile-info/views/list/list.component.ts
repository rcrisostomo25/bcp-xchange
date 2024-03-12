import { Component, OnInit, inject } from '@angular/core';
import { AgileInfoController } from '../../application/agile-info.controller';
import { IAgileInfo } from '../../../../shared/models/agile-info.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  providers:[AgileInfoController]
})
export class ListComponent implements OnInit {

  private agileInfoController = inject(AgileInfoController);

  agilesInfo: IAgileInfo[] = [];

  ngOnInit(): void {
    this.agileInfoController.getAgileInfo().subscribe(agileInfo => {
      this.agilesInfo = agileInfo;
    });
  }

}
