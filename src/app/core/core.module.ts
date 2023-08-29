import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, MatIconModule],
  exports: [NavigationComponent],
})
export class CoreModule {}
