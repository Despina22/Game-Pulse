import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../components/interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private readonly gamesUrl = `${environment.baseApiUrl}games`;

  constructor(private http: HttpClient) {}

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.gamesUrl}/${id}`);
  }
}
