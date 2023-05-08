import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalComponent } from './components/journal/journal.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: 'journal', component: JournalComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
