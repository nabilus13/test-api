import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiSearchComponent } from './api/api-search/api-search.component';

const routes: Routes = [
  // , loadChildren: () => import('../app/app.module').then( m => m.AppModule)
  { path: 'search', component: ApiSearchComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
