import { Component, OnInit, inject } from '@angular/core';
import { ReleasesController } from '../../application/releases-controller';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  providers: [ReleasesController]
})
export class ListComponent implements OnInit {

  private releasesController = inject(ReleasesController);

  ngOnInit(): void {
    this.releasesController.getReleases().subscribe(releases => {
      console.log(releases.versions);
    });
  }
}
