import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';
import { LinkComponent } from './components/link/link.component';
import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';
import { LawViewComponent } from './views/law-view/law-view.component';
import { ImagesViewComponent } from './views/images-view/images-view.component';
import { WritingViewComponent } from './views/writing-view/writing-view.component';
import { DataViewComponent } from './views/data-view/data-view.component';
import { SpacingComponent } from './components/spacing/spacing.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LinkComponent, HomepageViewComponent, LawViewComponent, ImagesViewComponent, WritingViewComponent, DataViewComponent, SpacingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
