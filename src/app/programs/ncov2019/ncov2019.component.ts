import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../programs.service';
import { ShareDialogService } from 'src/app/share-dialog/share-dialog.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-ncov2019',
  templateUrl: './ncov2019.component.html',
  styleUrls: ['./ncov2019.component.scss']
})
export class Ncov2019Component implements OnInit {
  public ncov2019Data: Array<any>;
  constructor(private programService: ProgramsService,
    private shareDialogService: ShareDialogService) {
  }

  ngOnInit() {
    // this.getnCov2019Data();
  }
  getnCov2019Data() {
    this.programService.getnCov2019Data().subscribe(
      (response: any) => {
        this.ncov2019Data = response.results,
          console.log(this.ncov2019Data);
      },
      (error: HttpErrorResponse) => this.programService.HandleError(error)
    );
  }
}
