import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundErrorsPageComponent } from './errors-page/not-found-errors-page/not-found-errors-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundErrorsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
