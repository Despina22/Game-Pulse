import { GameCardComponent } from './features/components/game-card/game-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomepageComponent } from './core/layouts/components/layout-homepage/layout-homepage.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHomepageComponent,
  },
  { path: 'games', component: GameCardComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
