import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { EarningComponent } from './components/earning/earning.component';
import { GamesComponent } from './components/games/games.component';

@NgModule({
  declarations: [EarningComponent, GamesComponent],
  imports: [CommonModule, FeaturesRoutingModule],
  exports: [EarningComponent, GamesComponent],
})
export class FeaturesModule {}
