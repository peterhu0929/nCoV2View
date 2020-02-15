import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../programs.service';
import { ShareDialogService } from 'src/app/share-dialog/share-dialog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StaticInjector } from '@angular/core/src/di/injector';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Tri002Component } from '../tri002/tri002.component';

@Component({
  selector: 'app-mask2020',
  templateUrl: './mask2020.component.html',
  styleUrls: ['./mask2020.component.scss']
})
export class Mask2020Component implements OnInit {
  public selectCity: string;
  public selectArea: string;
  public selectDistrict: string;
  public maskData: Array<any>;
  public cityCountry: Array<any>;
  public District: Array<any>;
  public PharmacyInfo: Array<any>;
  public PharmacyCount: string;
  public LastUpdatedTime: string;
  public SQL: string;
  public SQLdatas: Array<string>;

  // public Code: Array<string>;
  // public Description: Array<string>;
  constructor(private programService: ProgramsService,
    private shareDialogService: ShareDialogService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getCityCountryData();
    this.getMaskData();
    // this.getSQL();
    this.getLocation();
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
  // callMap(pContent) {
  //   this.shareDialogService.openShareDialog(pContent);
  // }
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
    // 重選清空選擇區與藥局數量
    this.selectArea = null;
    this.PharmacyCount = null;
    const selectDistrict = this.cityCountry.find(x => x.CityName === pCityName);
    this.District = selectDistrict.AreaList;
    // console.log(selectDistrict);
  }
  findPharmacy(pCityName: string, pAreaName: string) {
    console.log(pCityName, pAreaName);
    this.selectArea = pAreaName;
    this.PharmacyInfo = new Array<any>();
    this.PharmacyInfo = this.maskData.filter(
      x => x.properties.county === pCityName
        && x.properties.town === pAreaName);
    this.PharmacyCount = this.PharmacyInfo.length.toString() + '間';
    const updateData = this.PharmacyInfo.find(x => x.properties.updated != null);
    this.LastUpdatedTime = '最後更新時間為 ' + updateData.properties.updated;
    console.log(this.LastUpdatedTime);
  }
  changeColor(item: any): string {
    if (item === 0) {
      return 'GARY';
    } else if (item > 0 && item <= 150) {
      return '#f9090996';
    } else if (item > 150) {
      return '#3fb58961';
    }
  }
  getTest() {
    if (this.PharmacyInfo) {
      // this.PharmacyInfo.forEach(x => this.compare(x.properties.mask_adult, x.properties.mask_adult));
      // this.PharmacyInfo.sort(this.compare(a, b))
      this.PharmacyInfo = this.PharmacyInfo.filter(x => x.properties.mask_adult > 0);
      this.PharmacyCount = this.PharmacyInfo.length.toString() + '間';
      const updateData = this.PharmacyInfo.find(x => x.properties.updated != null);
      this.LastUpdatedTime = '最後更新時間為 ' + updateData.properties.updated;
    }
  }

  compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  openMapDialog(pContent?: any): void {
    const dialogRef = this.dialog.open(Tri002Component, {
      width: '600px',
      data: { content: pContent }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(pContent);
    });
  }
  getLocation() {
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError, options);
    } else {
      this.shareDialogService.openShareDialog('Geolocation is not supported by this browser.');
    }
  }
  showPosition(pos) {
    console.log(pos);
    let crd = pos.coords;
    var a = crd.latitude + ' ' + crd.longitude;
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    // alert(a.toString());
    // console.log(crd);
  }

  showError(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
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
