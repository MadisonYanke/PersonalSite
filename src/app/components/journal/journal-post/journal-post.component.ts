import { Component, NgModule } from '@angular/core';
import { JournalPost } from 'src/app/models/journal-post';

@Component({
  selector: 'journal-post',
  templateUrl: './journal-post.component.html',
  styleUrls: ['./journal-post.component.scss']
})
export class JournalPostComponent {
  
}

@Component({
  selector: 'journal-title',
  templateUrl: './journal-title.component.html',
  styleUrls: ['./journal-post.component.scss']
})
export class JournalTitleComponent {

}

@Component({
  selector: 'journal-text',
  templateUrl: './journal-text.component.html',
  styleUrls: ['./journal-post.component.scss']
})
export class JournalTextComponent {
  
}

@Component({
  selector: 'journal-meta',
  templateUrl: './journal-meta.component.html',
  styleUrls: ['./journal-post.component.scss']
})
export class JournalMetaComponent {

}

@NgModule({
  declarations: [
    JournalPostComponent,
    JournalTitleComponent,
    JournalTextComponent,
    JournalMetaComponent
  ],
  imports: [],
  exports: [
    JournalPostComponent,
    JournalTitleComponent,
    JournalTextComponent,
    JournalMetaComponent
  ],
  providers: [],
  bootstrap: []
})
export class JournalPostModule { }
