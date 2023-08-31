import { FeaturesModule } from './../features/features.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutHomepageComponent } from './layouts/components/layout-homepage/layout-homepage.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    LayoutHomepageComponent,
  ],
  imports: [CommonModule, MatIconModule, FontAwesomeModule, FeaturesModule],
  exports: [NavigationComponent, HeaderComponent, FooterComponent],
})
export class CoreModule {}
