import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardTeamsComponent } from './card-teams/card-teams.component';
import { DashboardTeamsComponent } from './dashboard-teams/dashboard-teams.component';
import { TeamsRoutingModule } from './teams-routing.module';

@NgModule({
  declarations: [
    CardTeamsComponent,
    DashboardTeamsComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class TeamsModule { }
