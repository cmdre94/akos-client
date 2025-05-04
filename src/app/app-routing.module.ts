import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';
import { LawViewComponent } from './views/law-view/law-view.component';
import { ImagesViewComponent } from './views/images-view/images-view.component';
import { WritingViewComponent } from './views/writing-view/writing-view.component';
import { DataViewComponent } from './views/data-view/data-view.component';
import { StrugglesOfTranslationViewComponent } from './views/struggles-of-translation-view/struggles-of-translation-view.component';
import { AtLeastMakeItAdequateComponent } from './views/at-least-make-it-adequate/at-least-make-it-adequate.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', pathMatch: 'full', component: HomepageViewComponent, data: { title: 'All Kinds of Stuff' } },
  { path: 'writing', component: WritingViewComponent, data: { title: 'Writing' } },
  { path: 'law', component: LawViewComponent, data: { title: 'Law' } },
  { path: 'images', component: ImagesViewComponent, data: { title: 'Images' } },
  { path: 'data', component: DataViewComponent, data: { title: 'Data' } },
  { path: 'strugglesOfTranslation', component: StrugglesOfTranslationViewComponent, data: { title: 'Struggles of Translation' } },
  { path: 'atLeastMakeItAdequate', component: AtLeastMakeItAdequateComponent, data: { title: 'At Least Make it Adequate' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }