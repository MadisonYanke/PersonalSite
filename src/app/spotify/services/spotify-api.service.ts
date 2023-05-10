import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, mergeMap } from 'rxjs';

@Injectable({
  //TODO: make a new injectible to restrict this to only spotify pages
  //TODO: make a private auth code flow to populate a "what I'm listening to" section
    //flow should be protected and allow me to login first via site, then via spotify
    //after login push the results of the top songs to database for site to pull
  providedIn: 'root'
})
export class SpotifyApiService {

  constructor(private http: HttpClient) {

  }

  public getUserData(): Observable<any> {
    let tokenCall: Observable<any> = this.getToken();
    return tokenCall.pipe(
      mergeMap((resp: any) => {
        const auth = 'Bearer ' + resp.access_token;
        return this.http.get(
          'https://api.spotify.com/v1/users/kreenarr',
          { headers: new HttpHeaders().set('Authorization', auth) }
      );})
    );
  }

  private getToken(): Observable<any> {
    const body = new HttpParams()
      .set("client_id", "40879beed91245bdbcf5b124a5130f40")
      .set("client_secret", "6783ed7752264554a292eaaacd11f94e")
      .set("grant_type", "client_credentials");
    return this.http.post(
      `https://accounts.spotify.com/api/token`,
      body,
      { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') }
    );
  };
}
