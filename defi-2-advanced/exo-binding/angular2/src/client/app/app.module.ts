import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { QuizzModule } from './quizz/quizz.module';
import { LeaderBoardModule } from './leaderboard/leaderboard.module';

@NgModule({
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routes),
    HomeModule, QuizzModule, LeaderBoardModule,
    SharedModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '<%= APP_BASE %>' },
    { provide: Storage, useValue: sessionStorage },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
