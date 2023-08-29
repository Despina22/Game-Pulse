import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [NavigationComponent, HeaderComponent],
  imports: [CommonModule, MatIconModule],
  exports: [NavigationComponent, HeaderComponent],
})
export class CoreModule {}
