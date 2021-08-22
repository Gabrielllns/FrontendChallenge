import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundErrorsPageComponent } from './errors-page/not-found-errors-page/not-found-errors-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./teams/teams.module').then(x => x.TeamsModule)
  },
  {
    path: '**',
    component: NotFoundErrorsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
