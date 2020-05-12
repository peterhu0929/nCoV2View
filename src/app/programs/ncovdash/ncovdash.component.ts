import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { ProgramsService } from '../programs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CovAll } from '../../_models/CovAll';
import { CovCountries } from '../../_models/CovCountries';

@Component({
  selector: 'app-ncovdash',
  templateUrl: './ncovdash.component.html',
  styleUrls: ['./ncovdash.component.scss']
})
export class NcovdashComponent {
  AllData: CovAll = new CovAll();
  TaiwanData: CovCountries = new CovCountries();

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card1', cols: 1, rows: 1, id: '1' },
          { title: 'Card2', cols: 1, rows: 1, id: '2' },
          { title: 'Card3', cols: 1, rows: 1, id: '3' },
          { title: 'Card4', cols: 1, rows: 1, id: '4' }
        ];
      }
      return [
        { title: '全球', cols: 1, rows: 1, id: '1' },
        { title: '台灣', cols: 1, rows: 1, id: '2' },
        { title: 'Card3', cols: 1, rows: 2, id: '3' },
        { title: 'Card4', cols: 1, rows: 2, id: '4' },
        { title: '義大利', cols: 1, rows: 1, id: '5' },
        { title: '美國', cols: 1, rows: 1, id: '6' },
        { title: 'Card7', cols: 1, rows: 1, id: '7' },
        { title: 'Card8', cols: 3, rows: 2, id: '8' },
        { title: 'Card9', cols: 1, rows: 1, id: '9' }
      ];
    })
  );
  constructor(private breakpointObserver: BreakpointObserver, private programService: ProgramsService) { }

  ngOnInit(): void {
    this.getAll();
    // this.getbyCountry('Taiwan');
    // this.getbyCountry('Italy');
    // this.getbyCountry('USA');

  }

  getAll() {
    this.programService.getCoronaAll().subscribe(
      (response: any) => {
        this.AllData = response,
          console.log(this.AllData.cases);
          window.setTimeout(function()
          {console.log('x')},3000);
      },
      (error: HttpErrorResponse) => this.programService.HandleError(error)
    );
  }
  getbyCountry(pCounty: string) {
    this.programService.getCoronabyCountry(pCounty).subscribe(
      (response: any) => {
        this.TaiwanData = response,
          console.log(this.TaiwanData);
      },
      (error: HttpErrorResponse) => this.programService.HandleError(error)
    );
  }
}
