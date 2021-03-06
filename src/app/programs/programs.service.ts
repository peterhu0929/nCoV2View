import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Triathlon } from "../_models/triathlon";
// import { environment } from 'src/environments/environment';
import { environment } from "src/environments/environment";
import { VTriathlon } from "../_models/vtriathlon";
@Injectable({
  providedIn: "root"
})
export class ProgramsService {
  constructor(private http: HttpClient, public snackBar: MatSnackBar) { }

  public updateData: Triathlon;
  public httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":
        "https://netcoretri30days.azurewebsites.net",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
      "Access-Control-Max-Age": "86400"
    })
  };
  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000
      // horizontalPosition: 'right'
    });
  }
  public getBackendData(): Observable<any> {
    const getURL = environment.TriBackendAPI + "/Triathlon/GetAllTri";
    return this.http.get<Triathlon>(getURL);
  }
  public getBackendDataByQuery(parameter: VTriathlon): Observable<Triathlon> {
    const URL = environment.TriBackendAPI + "/Triathlon/GetTriById";
    // const myparams = new URLSearchParams();
    let myparams = new HttpParams();
    if (this.isValue(parameter.id)) {
      myparams = myparams.set('Id', parameter.id);
    }
    if (this.isValue(parameter.year)) {
      myparams = myparams.set('year', parameter.year);
    }
    if (this.isValue(parameter.month_S)) {
      myparams = myparams.set('monthS', parameter.month_S);
    }
    if (this.isValue(parameter.month_E)) {
      myparams = myparams.set('monthE', parameter.month_E);
    }
    if (this.isValue(parameter.place)) {
      myparams = myparams.set('place', parameter.place);
    }
    console.log(URL + '?' + myparams);
    return this.http.get<Triathlon>(URL, { params: myparams });
  }

  public isValue(item: any) {
    console.log(item);
    if (item !== undefined && item !== '') {
      return true;
    }
  }
  public postBackendData(item: Triathlon): Observable<any> {
    // const _id = item.id;
    const URL = environment.TriBackendAPI + "/Triathlon/AddTri";
    console.log(URL);
    console.log(item);
    delete item.id;
    return this.http.post<Triathlon>(URL, item);
  }
  public putBackendData(item: Triathlon): Observable<any> {
    // const _id = item.id;
    const URL =
      environment.TriBackendAPI + "/Triathlon/UpdateTri?Id=" + item.id;
    console.log(URL);
    console.log(item);
    delete item.id;
    // this.updateData = new Triathlon();
    // this.updateData = item;
    // console.log(this.updateData);
    return this.http.put<Triathlon>(URL, item);
  }
  public deleteBackendData(id: string): Observable<any> {
    const URL = environment.TriBackendAPI + "/Triathlon/DeleteTri?Id=" + id;
    console.log(URL);
    return this.http.delete<Triathlon>(URL);
  }
  public getData(): Observable<any> {
    // const getURL = 'https://netcoretri30days.azurewebsites.net/api/user/GetAllUser';
    // return this.http.get<any>(getURL, this.httpOptions);
    const getURL = environment.GithubPage + '/assets/jsonData.json';
    return this.http.get<any>(getURL);
  }
  public getUbikeData(): Observable<any> {
    const URL =
      "http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000352-001";
    return this.http.get<any>(URL, this.httpOptions);
  }
  public getCityCountyData(): Observable<any> {
    const getURL = environment.GithubPage + '/assets/CityCountyData.json';
    return this.http.get<any>(getURL);
  }
  public getnCov2019Data(): Observable<any> {
    const URL = "https://lab.isaaclin.cn/nCoV/api/area?latest=1&province=湖南省";
    return this.http.get<any>(URL);
  }
  public getMaskData(): Observable<any> {
    const URL = "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json";
    return this.http.get<any>(URL);
  }
  public getCoronaAll(): Observable<any> {
    const URL ="https://disease.sh/v2/all";
    return this.http.get<any>(URL);
  }
  public getCoronabyCountry(pCountry: string): Observable<any> {
    const URL = "https://disease.sh/v2/countries/" + pCountry;
    return this.http.get<any>(URL);
  }
  public getDistance(start: any, end: any) {
    const lat1 = (Math.PI / 180) * start.latitude;
    const lat2 = (Math.PI / 180) * end.latitude;
    const lon1 = (Math.PI / 180) * start.longitude;
    const lon2 = (Math.PI / 180) * end.longitude;
    // 地球半徑
    const R = 6371;
    // 兩點間距離 km，如果想要米的話，結果*1000就可以了
    const d = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)) * R;

    return d * 1000;
  }
  // http呼叫錯誤處理
  public HandleError(e: any): void {
    console.log(e.error.Message);
    alert(e.error.Message);
  }
}
