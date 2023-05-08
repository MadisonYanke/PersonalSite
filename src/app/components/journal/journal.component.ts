import { Component } from '@angular/core';
import { JournalPost } from 'src/app/models/journal-post';

@Component({
  selector: 'journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent {
  post: any = {
    title: "Sample Post",
    post: "Hello, this is a sample post",
    date: new Date("01/25/1997")
  }
  jpost = new JournalPost().deserialize(this.post);
}
