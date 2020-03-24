import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrinavComponent } from './programs/trinav/trinav.component';
import { Tri001Component } from './programs/tri001/tri001.component';
import { Tri002Component } from './programs/tri002/tri002.component';
import { TrieventComponent } from './programs/trievent/trievent.component';
import { TrieventAddComponent } from './programs/trievent/trievent-add/trievent-add.component';
import { Ncov2019Component } from './programs/ncov2019/ncov2019.component';
import { Mask2020Component } from './programs/mask2020/mask2020.component';
import { NcovdashComponent } from './programs/ncovdash/ncovdash.component';

const routes: Routes =
  [{ path: '', redirectTo: '/ncovdash', pathMatch: 'full' },
  { path: 'tri001', component: Tri001Component },
  { path: 'tri002', component: Tri002Component },
  { path: 'trievent', component: TrieventComponent },
  { path: 'trievent-Add', component: TrieventAddComponent },
  { path: 'ncov2019', component: Ncov2019Component },
  { path: 'mask2020', component: Mask2020Component },
  { path: 'ncovdash', component: NcovdashComponent }
  ];
// [
//   {
//     path: 'home',
//     component: TrinavComponent,
//     children: [
//       { path: 'tri001', component: Tri001Component },
//       { path: 'tri002', component: Tri002Component },
//       { path: '', redirectTo: 'home', pathMatch: 'full' },
//     ]
//   },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, enableTracing: false },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
