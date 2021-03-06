import { Component, OnInit, ViewChild } from '@angular/core';
import { ProgramsService } from '../programs.service';
import { ShareDialogService } from 'src/app/share-dialog/share-dialog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Triathlon } from '../../_models/triathlon';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { TrieventDetailComponent } from './trievent-detail/trievent-detail.component';
import { fakedata } from './fakedata';
import { Router } from '@angular/router';
import { VTriathlon } from 'src/app/_models/vtriathlon';
import { RecordGroup } from 'src/app/_models/RecordGroup';

@Component({
  selector: 'app-trievent',
  templateUrl: './trievent.component.html',
  // styleUrls: ['./trievent.component.scss']
})

export class TrieventComponent implements OnInit {
  // 定義呼叫dialog
  @ViewChild(TrieventDetailComponent)
  // 定義分頁
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // 定義排序
  @ViewChild(MatSort) sortTable: MatSort;

  public tridataTable = new MatTableDataSource<Triathlon>();
  public totalCount = 0;
  public tridata: Array<Triathlon>;
  public queryTridata: VTriathlon = new VTriathlon();
  displayedColumns: string[] = ['EDIT_BUTTON', 'DELETE_BUTTON', 'Detail', 'year', 'month'
    , 'day', 'place', 'name', 'organizer', 'location', 'applydate', 'status'];

  months: RecordGroup[] = [
    { CODE: '01', NAME: '1' },
    { CODE: '02', NAME: '2' },
    { CODE: '03', NAME: '3' },
    { CODE: '04', NAME: '4' },
    { CODE: '05', NAME: '5' },
    { CODE: '06', NAME: '6' },
    { CODE: '07', NAME: '7' },
    { CODE: '08', NAME: '8' },
    { CODE: '09', NAME: '9' },
    { CODE: '10', NAME: '10' },
    { CODE: '11', NAME: '11' },
    { CODE: '12', NAME: '12' },
  ];
  constructor(
    private programService: ProgramsService,
    private shareDialogService: ShareDialogService,
    public dialog: MatDialog,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getTriData();
    this.tridataTable.sort = this.sortTable;
    // this.tridataTable.data = fakedata;
  }
  getTriData() {
    this.programService.getData()
      .subscribe(
        (response: any) => {
          this.tridata = response.data;
          this.tridataTable.data = response.data;
          this.tridataTable.paginator = this.paginator;
          this.tridataTable.sort = this.sortTable;
          this.totalCount = response.data.length;
          console.log(this.tridata);
          console.log(this.tridataTable.data);
        }
        , (error: HttpErrorResponse) => this.programService.HandleError(error)
      );
  }

  addTriData(data?: Triathlon) {
    // console.log(data);
    this._router.navigate(['/trievent-Add'], {
      queryParams: {
        // pAgentCode: data.AGENT_CODE,
        // pLoginUser: this.webLfcUserInfo.LOGIN_USER
      }
    });
  }


  // 打開detail視窗
  public openDetailDialog(Data?: any): void {
    const dialogRef = this.dialog.open(TrieventDetailComponent, {
      width: '1500px',
      data: { pData: Data },
      disableClose: false // focus or not
    });
    // dialog關閉後可以觸發之動作
    dialogRef.afterClosed().subscribe(result => {
      // this.getBuildingContract(this.ngContractData);
      console.log('The dialog was closed');
    });
  }
  getTriDataByQuery(item: VTriathlon) {
    this.programService.getBackendDataByQuery(item)
      .subscribe(
        (response: any) => {
          this.tridataTable.data = response.data;
          this.tridataTable.paginator = this.paginator;
          this.tridataTable.sort = this.sortTable;
          this.totalCount = response.data.length;
          // console.log(this.tridata);
          // console.log(this.tridataTable.data);
        }
        , (error: HttpErrorResponse) => this.programService.HandleError(error)
      );
  }
  // Data Table Filter功能
  applyFilter(filterValue: string) {
    // console.log(filterValue);
    if (filterValue.length >= 2) {
      this.tridataTable.filter = filterValue.trim().toUpperCase();
    } else {
      this.tridataTable.filter = null;
    }
  }
  updateTriData(item: Triathlon) {
    this.shareDialogService.openShareDialog(JSON.stringify(item));
    this.programService
      .putBackendData(item)
      .subscribe(
        (response: any) => {
          console.log(item);
          this.programService.openSnackBar(response.data.name, '已修改');
          console.log(response);
        },
        (error: HttpErrorResponse) => this.programService.HandleError(error)
      );
  }
  deleteTriData(pID: string) {
    this.programService.deleteBackendData(pID)
      .subscribe(
        (response: any) => {
          console.log(pID);
          // this.programService.openSnackBar(response.isSuccess, '已');
          this.shareDialogService.openShareDialog(response.data.name + '已刪除');
          console.log(response);
          this.getTriData();
        }
        , (error: HttpErrorResponse) => this.programService.HandleError(error)
      );
  }
}
