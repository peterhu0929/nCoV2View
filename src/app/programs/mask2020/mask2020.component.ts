import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../programs.service';
import { ShareDialogService } from 'src/app/share-dialog/share-dialog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StaticInjector } from '@angular/core/src/di/injector';
import { p } from '@angular/core/src/render3';

@Component({
  selector: 'app-mask2020',
  templateUrl: './mask2020.component.html',
  styleUrls: ['./mask2020.component.scss']
})
export class Mask2020Component implements OnInit {
  public selectCity: string;
  public selectArea: string;
  public maskData: Array<any>;
  public cityCountry: Array<any>;
  public District: Array<any>;
  public PharmacyInfo: Array<any>;
  public PharmacyCount: number;
  public SQL: string;
  public SQLdatas: Array<string>;

  // public Code: Array<string>;
  // public Description: Array<string>;
  constructor(private programService: ProgramsService,
    private shareDialogService: ShareDialogService) { }

  ngOnInit() {
    this.getCityCountryData();
    this.getMaskData();
    // this.getSQL();
  }

  getSQL() {
    this.SQLdatas = new Array<string>();
    const Code = ['abc',
      'peter test',
      't_委外',
      'test',
      'Test2',
      'Test2_委外',
      't_自營',
      'OI',
      'OI_自營',
      'OI_委外',
      '全基金(排除外匯風險)',
      '自營(排除外匯風險)',
      'OI',
      '國內委外(排除外匯風險)',
      'DF',
      'DF_自營',
      'DF_委外',
      'DE',
      'DE_自營',
      'DE_委外',
      '國外委外(排除外匯風險)',
      '國外部位',
      'GF',
      'GF_自營',
      'GF_委外',
      'GE',
      'GE_自營',
      'GE_委外',
      'DD',
      'DD_自營',
      'DD_委外'];
    const Description = ['abc',
      'peter',
      't',
      'test',
      'Test2',
      'Test2_委外',
      't-自營',
      '另類投資',
      '另類投資_自營',
      '另類投資_委外',
      '全基金(排除外匯風險)',
      '自營(排除外匯風險)',
      '其他',
      '國內委外(排除外匯風險)',
      '國內債務證券',
      '國內債務證券_自營',
      '國內債務證券_委外',
      '國內權益證券',
      '國內權益證券_自營',
      '國內權益證券_委外',
      '國外委外(排除外匯風險)',
      '國外部位',
      '國外債券證券',
      '國外債券證券_自營',
      '國外債券證券_委外',
      '國外權益證券',
      '國外權益證券_自營',
      '國外權益證券_委外',
      '銀行存款',
      '銀行存款_自營',
      '銀行存款_委外'];
    for (let i = 0; i <= Code.length - 1; i++) {
      const SQL = 'INSERT INTO [dbo].[tblUserDefinePortfolioCondition]([Code],[Description],[Moditime]) VALUES' +
        `('` + Code[i] + `','` + Description[i] + `', GETDATE())`;
      this.SQLdatas.push(SQL);
    }
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
  getDistrict(pCityName: string) {
    var selectDistrict = this.cityCountry.find(x => x.CityName === pCityName);
    this.District = selectDistrict.AreaList
    // console.log(selectDistrict);
  }
  findPharmacy(pCityName: string, pAreaName: string) {
    console.log(pCityName, pAreaName);
    this.selectArea = pAreaName;
    this.PharmacyInfo = new Array<any>();
    this.PharmacyInfo = this.maskData.filter(
      x => x.properties.county === pCityName
        && x.properties.town === pAreaName);
    this.PharmacyCount = this.PharmacyInfo.length;
    console.log(this.PharmacyInfo);
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
