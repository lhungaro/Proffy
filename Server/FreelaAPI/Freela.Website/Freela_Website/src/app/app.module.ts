import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { FooterComponent } from './components/footer/footer.component';
import { FreelaListComponent } from './pages/freela-list/freela-list.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FreelaItemComponent } from './components/freela-item/freela-item.component';
import { ProjectListComponent } from './Pages/project-list/project-list.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { FreelaRankingComponent } from './components/freela-ranking/freela-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterComponent,
    FreelaListComponent,
    PageHeaderComponent,
    FreelaItemComponent,
    ProjectItemComponent,
    ProjectListComponent,
    FreelaRankingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
