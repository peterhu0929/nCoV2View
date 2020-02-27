import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../programs.service';
import { ShareDialogService } from 'src/app/share-dialog/share-dialog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-ncov2019',
  templateUrl: './ncov2019.component.html',
  styleUrls: ['./ncov2019.component.scss']
})
export class Ncov2019Component implements OnInit {
  public ncov2019Data: Array<any>;
  public mdCard: string;
  public showYN = false;
  public item = 'test';
  constructor(private programService: ProgramsService,
    private shareDialogService: ShareDialogService,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // this.getnCov2019Data();
    // this.getCard();
    // this.getShow(this.showYN);
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
  getCard(pItem: any) {
    const a = `<button mat-raised-button>${pItem}</button>`;
    // const a = pItem.replace(pItem, `<button mat-raised-button color='warn'>${pItem}</button>`);
    // console.log(this.sanitizer.bypassSecurityTrustHtml(a));
    return this.sanitizer.bypassSecurityTrustHtml(a);
  }
  getShow(pBol) {
    return !pBol;
  }
}
