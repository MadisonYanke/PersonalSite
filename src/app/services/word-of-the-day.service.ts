import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordOfTheDayService {
  constructor(private http: HttpClient) { }
  
  public getWordOfTheDay(){
    this.getPageElementInnerText().subscribe((resp: any) => {
      console.log(resp);
    });
  }

  public getPageElementInnerText(): Observable<any> {
    return this.http.get('https://crossorigin.me/https://www.merriam-webster.com/word-of-the-day');
  }
}
