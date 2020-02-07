import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../programs.service';
import { ShareDialogService } from 'src/app/share-dialog/share-dialog.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-mask2020',
  templateUrl: './mask2020.component.html',
  styleUrls: ['./mask2020.component.scss']
})
export class Mask2020Component implements OnInit {
  public fileReaded: any;
  public maskData: Array<any>;
  public cityCountry: Array<any>;
  public District: Array<any>;
  constructor(private programService: ProgramsService,
    private shareDialogService: ShareDialogService) { }

  ngOnInit() {
    this.getCityCountryData();
    // this.getMaskData();
  }
  getCityCountryData() {
    this.programService.getCityCountyData().subscribe(
      (response: any) => {
        this.cityCountry = response,
          console.log(this.cityCountry);
      },
      (error: HttpErrorResponse) => this.programService.HandleError(error)
    );
  }
  getMaskData() {
    this.programService.getMaskData().subscribe(
      (response: any) => {
        this.maskData = response.features,
          console.log(this.maskData);
      },
      (error: HttpErrorResponse) => this.programService.HandleError(error)
    );
  }
  getDistrict(pcityName: string) {
    // console.log(pcityName);
    var selectDistrict = this.cityCountry.find(x => x.CityName === pcityName);
    this.District = selectDistrict.AreaList
    // console.log(this.District);
  }
  /* #region csv2Array*/
  // csv2Array(fileInput: any) {
  //   this.fileReaded = fileInput.target.files[0];
  //   console.log(this.fileReaded);
  //   const reader: FileReader = new FileReader();
  //   reader.readAsText(this.fileReaded);
  //   reader.onload = (e) => {
  //     const csv: string = reader.result;
  //     let allTextLines = csv.split(/\r|\n|\r/);
  //     let headers = allTextLines[0].split(',');
  //     let lines = [];
  //     console.log(headers);
  //     for (let i = 0; i < allTextLines.length; i++) {
  //       // split content based on comma
  //       let data = allTextLines[i].split(',');
  //       if (data.length === headers.length) {
  //         let tarr = [];
  //         for (let j = 0; j < headers.length; j++) {
  //           tarr.push(data[j]);
  //         }
  //         // log each row to see output
  //         // console.log(tarr);
  //         lines.push(tarr);
  //       }
  //     }
  //     // all rows in the csv file
  //     console.log(">>>>>>>>>>>>>>>>>", lines);
  //   }
  // }
  /* #endregion */
}
