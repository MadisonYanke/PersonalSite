import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalComponent } from './components/journal/journal.component';
import { JournalPostModule } from './components/journal/journal-post/journal-post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';
import { SpotifyModule } from './spotify/spotify.module';
import { WordOfTheDayService } from './services/word-of-the-day.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JournalComponent,
    ProfileComponent,
    SocialButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JournalPostModule,
    SpotifyModule
  ],
  providers: [WordOfTheDayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
