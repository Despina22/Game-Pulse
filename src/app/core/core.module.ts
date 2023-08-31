import { FeaturesModule } from './../features/features.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutHomepageComponent } from './layouts/components/layout-homepage/layout-homepage.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [NavigationComponent, HeaderComponent, FooterComponent];
@NgModule({
  declarations: [...COMPONENTS, LayoutHomepageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FontAwesomeModule,
    FeaturesModule,
    RouterModule,
  ],
  exports: [...COMPONENTS],
})
export class CoreModule {}
