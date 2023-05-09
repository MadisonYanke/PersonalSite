import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from '../../services/spotify-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'spotify-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  display_name!: string;
  id!: string;
  uri!: string;
  $userData!: Observable<any>;
  ngOnInit(): void {
    this.$userData = this.spotifyService.getUserData();
    this.parseUserData();
  }

  constructor(private spotifyService: SpotifyApiService){

  }

  public parseUserData(){
    this.$userData.subscribe((resp: any) => {
      this.display_name = resp.display_name;
      this.id = resp.id;
      this.uri = resp.uri;
    })
  }
}
