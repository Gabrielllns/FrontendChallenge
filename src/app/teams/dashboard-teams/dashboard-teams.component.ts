import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from 'src/app/config/interfaces/team.interface';

@Component({
  selector: 'app-dashboard-teams',
  templateUrl: './dashboard-teams.component.html',
  styleUrls: ['./dashboard-teams.component.scss']
})
export class DashboardTeamsComponent implements OnInit {

  public teams: Team[] = [];
  public battles: any[] = [];
  public formTeam: FormGroup;
  public maxTeams: number = 8;
  public isAutomatic: boolean;
  public stepBattle: number = -1;
  public historyBattles: any[] = [];

  /**
   * Constructor.
   *
   * @param _formBuilder
   */
  constructor(private _formBuilder: FormBuilder) { }

  /**
   * Initializes to properties.
   */
  ngOnInit(): void {

    this.formTeam = this._formBuilder.group({
      newTeam: [undefined, [Validators.required, Validators.maxLength(20)]]
    });
  }

  /**
   * Validate existing multiples.
   *
   * @param teams
   * @returns boolean
   */
  public isValidMod(teams: Team[]): boolean {
    return (teams.length <= 2) ? (teams.length % 2 == 0) : (teams.length <= 4) ? (teams.length % 4 == 0) : (teams.length % 8 == 0);
  }

  /**
   * Advance the steps.
   *
   * @param teams
   */
  public nextStep(teams: Team[]): void {
    this.stepBattle = 0;
    this.distributeBattles(teams);(teams);
  }

  /**
   * Validate the number limit per team.
   *
   * @returns boolean
   */
  public isLimitValidNumberTeams(): boolean {
    return (this.maxTeams - this.teams.length) > 0;
  }

  /**
   * Draw for teams to battle.
   *
   * @param teams
   */
  public sortBattles(teams: Team[]): void {
    let randomIndex = undefined;
    let currentIndex = teams.length;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [teams[currentIndex], teams[randomIndex]] = [teams[randomIndex], teams[currentIndex]];
    }

    this.distributeBattles(teams);
  }

  /**
   * Mmounts a battles.
   *
   * @param teams
   */
  private distributeBattles(teams: Team[]): void {
    this.battles = [];
    let indexControl: Team[] = [];

    teams.forEach((team: Team) => {
      team.score = 0;
      team.isWinner = false;
      indexControl.push(team);

      if (indexControl.length == 2) {
        this.battles.push(indexControl);
        indexControl = [];
      }
    });
  }

  /**
   * Finish the simulation.
   */
  public finishSimulate(): void {
    this.teams = [];
    this.battles = [];
    this.stepBattle = -1;
    this.historyBattles = [];
  }

  /**
   * Starts simulation based on parameters.
   *
   * @param battles
   * @param isAutomatic
   */
  public initSimulate(battles: any[], isAutomatic: boolean): void {
    this.stepBattle = 1;
    this.isAutomatic = isAutomatic;

    battles = this.getBattleWinner(this.startBattles(battles));

    if (isAutomatic) {
      this.automaticSimulation();
    }
  }

  /**
   * Starts automated simulation.
   */
  private automaticSimulation(): void {

    if (this.teams.length > 1) {

      setTimeout(() => {
        this.nextStep(this.teams);
        this.initSimulate(this.battles, true);
      }, 1000);
    }
  }

  /**
   * Initialize of the battle.
   *
   * @param battles
   * @returns any[]
   */
  private startBattles(battles: any[]): any[] {

    battles.forEach((battle: any[]) => {

      battle.forEach((team: Team) => {
        team.score = this.generateNumber();
      });
    });

    return battles;
  }

  /**
   * Retrieve the winner of the battle.
   *
   * @param battles
   * @returns any[]
   */
  private getBattleWinner(battles: any[]): any[] {

    battles.forEach((battle: any[]) => {
      (battle[0].score > battle[1].score) ? battle[0].isWinner = true : battle[1].isWinner = true;
    });

    this.historyBattles.push(JSON.parse(JSON.stringify(battles)));

    this.teams = this.teams.filter((team: Team) => {
      return team.isWinner;
    });

    return battles;
  }

  /**
   * Remove the desired team.
   *
   * @param team
   */
  public deleteTeam(team: Team): void {
    this.teams.splice(this.teams.indexOf(team), 1);
  }

  /**
   * Add a new team.
   *
   * @param formTeam
   */
  public addTeam(formTeam: FormGroup): void {

    if (formTeam.valid) {

      if (!this.teams.find((team: Team) => { return team.name === formTeam.value.newTeam })) {
        this.teams.push({ id: this.generateNumber(), name: formTeam.value.newTeam, score: 0, isWinner: false });
        this.formTeam.reset();
      }
    }
  }

  /**
   * Generates random numbers.
   *
   * @returns number
   */
  private generateNumber(): number {
    return Math.ceil(Math.random() * 10000);
  }
}
