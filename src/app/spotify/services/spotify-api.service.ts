import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  //TODO: make a new injectible to restrict this to only spotify pages
  providedIn: 'root'
})
export class SpotifyApiService {
  private access_token: string | null = null;
  private token_expire_time!: Date;

  constructor(private http: HttpClient) {

  }

  public getUserData(): Observable<any>{
    console.log(this.checkTokenExpired());
    console.log(this.access_token);
    if (this.access_token == null || this.checkTokenExpired()){
      this.getToken().subscribe((resp: any) => {
        this.access_token = resp.access_token;
        this.token_expire_time = new Date(new Date().valueOf + resp.expires_in);
        console.log(this.access_token)
        return this.userData(); //THIS RETURNS THE SUBSCRIPTION, AND NOT AN OBSERVABLE
      })
    }
    console.log('?')
    return this.userData();
  }

  private userData(): Observable<any>{
    const auth = 'Bearer ' + this.access_token;
    return this.http.get(
      'https://api.spotify.com/v1/me',
      {headers: new HttpHeaders().set('Authorization', auth)} 
    )
  }

  private checkTokenExpired(): boolean {
    return (this.token_expire_time < new Date());
  }

  private getToken(): Observable<any> {
    const body = new HttpParams()
      .set("client_id", "40879beed91245bdbcf5b124a5130f40")
      .set("client_secret", "6783ed7752264554a292eaaacd11f94e")
      .set("grant_type", "client_credentials")
    return this.http.post(
      `https://accounts.spotify.com/api/token`,
      body,
      {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')} 
    );
  }

  //  .valueOf() to get timestamp
}
