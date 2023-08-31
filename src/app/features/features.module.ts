import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { EarningComponent } from './components/earning/earning.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GamesComponent } from './components/games/games.component';

const COMPONENTS = [
  EarningComponent,
  GamesComponent,
  GameCardComponent,
  GameDetailComponent,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
})
export class FeaturesModule {}
