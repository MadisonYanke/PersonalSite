import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalComponent } from './components/journal/journal.component';
import { JournalPostModule } from './components/journal/journal-post/journal-post.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JournalPostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
