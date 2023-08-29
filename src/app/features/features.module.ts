import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { EarningComponent } from './components/earning/earning.component';

@NgModule({
  declarations: [EarningComponent],
  imports: [CommonModule, FeaturesRoutingModule],
  exports: [EarningComponent],
})
export class FeaturesModule {}
