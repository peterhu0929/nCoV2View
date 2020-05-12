import { Component, OnInit, Pipe } from '@angular/core';
import { ProgramsService } from '../programs.service';
import { ShareDialogService } from 'src/app/share-dialog/share-dialog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { from, of } from 'rxjs';
import { filter, map, groupBy, mergeMap, toArray, tap, mergeAll } from 'rxjs/operators';

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


people = [
  { name: 'Anna', score: 100, subject: 'English' },
  { name: 'Anna', score: 90, subject: 'Math' },
  { name: 'Anna', score: 96, subject: 'Chinese' },
  { name: 'Jerry', score: 80, subject: 'English' },
  { name: 'Jerry', score: 100, subject: 'Math' },
  { name: 'Jerry', score: 90, subject: 'Chinese' },
];
  groupedData: any = [];
  testData = new Array<any>();

  constructor(private programService: ProgramsService,
    private shareDialogService: ShareDialogService,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // this.getnCov2019Data();
    // this.getCard();
    // this.getShow(this.showYN);
    this.getGroupByData();
  }
  getGroupByData(){
    // const squareOdd = of(1, 2, 3, 4, 5)
    //   .pipe(
    //     filter(n => n % 2 !== 0),
    //     map(n => n * n)
    //   );

    // Subscribe to get values
    // squareOdd.subscribe(x => this.testData.push(x));



    var example = from(this.people)
    .pipe(
     groupBy(person => person.name),
     mergeMap(group$ => group$.pipe(toArray())),
     map(x => {
       const sumScore = x.map(x => x.score).reduce((prev, curr) => prev + curr);
     return {
       name: x[0].name,
       sumScore
     };
    },
    toArray()
    ));
    //  mergeMap(group$ => group$.pipe(toArray())),
    //  map(x => {
    //     const sumScore = x.map(x => x.score).reduce((prev, curr) => prev + curr);
    //     return {
    //       name,
    //       sumScore,
    //     };
    //   }),
    //    toArray());
    // map(group => group.reduce((acc,curr)=>
    // ({
    //   name: curr.name,
    //   score:curr.score+acc.score
    // })
    // ))

    //  );
    example.subscribe(x => console.log(x));


    //   groupBy(person=>person.name).map(
    //   group=>group.reduce((acc,curr)=>({
    //     name:curr.name,
    //     score:curr.score+acc.score
    //   }))).merageAll();
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
