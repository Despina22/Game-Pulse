import { GameCardComponent } from './features/components/game-card/game-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomepageComponent } from './core/layouts/components/layout-homepage/layout-homepage.component';
import { GameDetailComponent } from './features/components/game-detail/game-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHomepageComponent,
  },
  { path: 'games', component: GameCardComponent },
  { path: 'game/:gameId', component: GameDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
