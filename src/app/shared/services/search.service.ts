import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Game } from 'src/app/features/components/interfaces/game.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchValue$: Subject<string> = new Subject<string>();
  private readonly gamesUrl = `${environment.baseApiUrl}games`;

  constructor(private http: HttpClient) {}

  searchGame(searchTerm: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.gamesUrl}?name_like=${searchTerm}`);
  }
}
