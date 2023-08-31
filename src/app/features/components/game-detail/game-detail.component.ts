import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game.interface';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  game$?: Observable<Game>;
  private gameId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.gameId = +this.activatedRoute.snapshot.paramMap.get('gameId')!;
    this.getGameDetails();
  }

  private getGameDetails(): void {
    this.game$ = this.gamesService.getGameById(this.gameId);
  }
}
