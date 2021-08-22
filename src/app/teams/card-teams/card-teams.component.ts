import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-teams',
  templateUrl: './card-teams.component.html',
  styleUrls: ['./card-teams.component.scss']
})
export class CardTeamsComponent implements OnInit {

  @Input() battles: any[] = [];

  /**
   * Constructor.
   */
  constructor() { }

  /**
   * Initializes to properties.
   */
  ngOnInit(): void {}
}
