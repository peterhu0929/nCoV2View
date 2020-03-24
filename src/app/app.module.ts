import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ProgramsService } from './programs/programs.service';
import { TrinavComponent } from './programs/trinav/trinav.component';
import { Tri001Component } from './programs/tri001/tri001.component';
import { Tri002Component } from './programs/tri002/tri002.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { PipeModule } from './_pipe/pipe.module';
import { Code2namePipe } from './_pipe/code2name.pipe';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TrieventComponent } from './programs/trievent/trievent.component';
import { TrieventDetailComponent } from './programs/trievent/trievent-detail/trievent-detail.component';
import { TrieventAddComponent } from './programs/trievent/trievent-add/trievent-add.component';
import { Ncov2019Component } from './programs/ncov2019/ncov2019.component';
import { Mask2020Component } from './programs/mask2020/mask2020.component';
import { NcovdashComponent } from './programs/ncovdash/ncovdash.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NcovdashCountryComponent } from './programs/ncovdash/ncovdash-country/ncovdash-country.component';

@NgModule({
  declarations: [
    AppComponent,
    TrinavComponent,
    Tri001Component,
    Tri002Component,
    ShareDialogComponent,
    TrieventComponent,
    TrieventDetailComponent,
    TrieventAddComponent,
    Ncov2019Component,
    Mask2020Component,
    NcovdashComponent,
    NcovdashCountryComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // RouterModule,
    HttpClientModule,
    AngularMaterialModule,
    PipeModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  entryComponents: [ShareDialogComponent, TrieventDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
