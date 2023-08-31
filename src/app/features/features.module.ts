import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { EarningComponent } from './components/earning/earning.component';
import { GamesComponent } from './components/games/games.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { RouterModule } from '@angular/router';
import { GameDetailComponent } from './components/game-detail/game-detail.component';

@NgModule({
  declarations: [EarningComponent, GamesComponent, GameCardComponent, GameDetailComponent],
  imports: [CommonModule, FeaturesRoutingModule, RouterModule],
  exports: [EarningComponent, GamesComponent],
})
export class FeaturesModule {}
