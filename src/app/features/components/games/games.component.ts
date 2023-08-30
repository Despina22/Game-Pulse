import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { take, tap } from 'rxjs';
import { Game } from '../interfaces/game.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games?: Game[];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.gamesService
      .getAllGames()
      .pipe(take(1))
      .subscribe((data) => {
        this.games = data.slice(0, 6);
      });
  }
}
