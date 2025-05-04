import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { LinkComponent } from './components/link/link.component';
import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';
import { LawViewComponent } from './views/law-view/law-view.component';
import { ImagesViewComponent } from './views/images-view/images-view.component';
import { WritingViewComponent } from './views/writing-view/writing-view.component';
import { DataViewComponent } from './views/data-view/data-view.component';
import { SpacingComponent } from './components/spacing/spacing.component';
import { CardComponent } from './components/card/card.component';
import { StrugglesOfTranslationViewComponent } from './views/struggles-of-translation-view/struggles-of-translation-view.component';
import { ButtonComponent } from './components/button/button.component';
import { AtLeastMakeItAdequateComponent } from './views/at-least-make-it-adequate/at-least-make-it-adequate.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent, LinkComponent, HomepageViewComponent, LawViewComponent, ImagesViewComponent, WritingViewComponent, DataViewComponent, SpacingComponent, CardComponent, StrugglesOfTranslationViewComponent, ButtonComponent, AtLeastMakeItAdequateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions(),
    ReactiveFormsModule,
    PdfViewerModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
