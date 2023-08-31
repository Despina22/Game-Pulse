import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game } from '../interfaces/game.interface';
import { GamesService } from '../../services/games.service';
import {
  Observable,
  Subject,
  debounceTime,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit, OnDestroy {
  gameList!: Game[];
  gamesPerPage: number = 3;
  selectedPage = 1;
  games: Game[] = [];
  gameNotFound: boolean = false;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private gamesService: GamesService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.getGames();
    this.searchGame();
  }

  getGames() {
    this.gamesService
      .getAllGames()
      .pipe(take(1))
      .subscribe((data) => {
        this.gameList = data;
        let pageIndex = (this.selectedPage - 1) * this.gamesPerPage;
        this.games = this.gameList.slice(pageIndex, this.gamesPerPage);
      });
  }

  changePageSize(event: Event) {
    const newSize = (event.target as HTMLInputElement).value;
    this.gamesPerPage = Number(newSize);
    this.changePage(1);
  }

  changePage(page: any) {
    this.selectedPage = page;
    this.slicedGames();
  }

  slicedGames() {
    let pageIndex = (this.selectedPage - 1) * this.gamesPerPage;
    let endIndex =
      (this.selectedPage - 1) * this.gamesPerPage + this.gamesPerPage;
    this.games = [];
    this.games = this.gameList.slice(pageIndex, endIndex);
  }

  get pageNumbers(): number[] {
    const pageCount = Math.ceil(this.gameList?.length / this.gamesPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  private searchGame(): void {
    this.searchService.searchValue$
      .asObservable()
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(500),
        switchMap((term) => this.searchService.searchGame(term))
      )
      .subscribe((data) => {
        if (data.length) {
          this.gameNotFound = false;
          this.games = data;
        } else {
          this.gameNotFound = true;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
