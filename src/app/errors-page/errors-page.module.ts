import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundErrorsPageComponent } from './not-found-errors-page/not-found-errors-page.component';



@NgModule({
  declarations: [
    NotFoundErrorsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ErrorsPageModule { }
