
import { BrowserModule } from '@angular/platform-browser';
import { QuotePageModule } from './../pages/quote/quote.module';
import { QuotesPageModule } from './../pages/quotes/quotes.module';
import { FavoritePageModule } from './../pages/favorite/favorite.module';
import { LibraryPageModule } from './../pages/library/library.module';
import { TabsPageModule } from './../pages/tabs/tabs.module';
import { UserPage } from './../pages/users/user/user.page';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { UsersPageModule } from './../pages/users/users.module';
import { UsersPage } from '../pages/users/users';

import { TabsPage } from '../pages/tabs/tabs';
import { FavoritePage } from '../pages/favorite/favorite';
import { LibraryPage } from '../pages/library/library';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuotePage } from '../pages/quote/quote';
import { QuotesService } from './../services/quote.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule, 
    UsersPageModule,
    TabsPageModule,
    LibraryPageModule,
    FavoritePageModule,
    QuotesPageModule,
    QuotePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage,
    TabsPage,
    FavoritePage,
    LibraryPage,
    QuotesPage,
    QuotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService
  ]
})
export class AppModule {}
