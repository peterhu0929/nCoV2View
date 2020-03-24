import { Component, OnInit, Input } from '@angular/core';
import { ProgramsService } from '../../programs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CovCountries } from 'src/app/_models/CovCountries';

@Component({
  selector: 'app-ncovdash-country',
  templateUrl: './ncovdash-country.component.html',
  styleUrls: ['./ncovdash-country.component.scss']
})
export class NcovdashCountryComponent implements OnInit {
  @Input() CountryName: string;
  countryData: CovCountries = new CovCountries();
  constructor(private programService: ProgramsService) { }

  ngOnInit() {
    this.getbyCountry(this.CountryName);
  }
  getbyCountry(pCounty: string) {
    this.programService.getCoronabyCountry(pCounty).subscribe(
      (response: any) => {
        this.countryData = response,
          console.log(this.countryData);
      },
      (error: HttpErrorResponse) => this.programService.HandleError(error)
    );
  }
}
