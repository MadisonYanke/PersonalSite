import { NgModule } from '@angular/core';
import { SpotifyApiService } from './services/spotify-api.service';
import { UserDataComponent } from './components/user-data/user-data.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserDataComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    UserDataComponent
  ],
  providers: [
    SpotifyApiService
  ],
  bootstrap: []
})
export class SpotifyModule { }
