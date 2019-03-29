import { UserPage } from './user/user.page';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPage } from './users';

@NgModule({
  declarations: [
    UsersPage, UserPage
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
  ],
})
export class UsersPageModule {}
