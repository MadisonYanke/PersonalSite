import { Component } from '@angular/core';
import { WordOfTheDayService } from './services/word-of-the-day.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private wordOfTheDay: WordOfTheDayService ){
    this.wordOfTheDay.getWordOfTheDay();
  }
  
  title = 'PersonalSite';
}
