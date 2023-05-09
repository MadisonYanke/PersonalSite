import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalComponent } from './components/journal/journal.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserDataComponent } from './spotify/components/user-data/user-data.component';

const routes: Routes = [
  {path: 'journal', component: JournalComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'spotify', component: UserDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
