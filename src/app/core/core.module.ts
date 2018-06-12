import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { CoreRoutingModule } from './core-routing.module';
import { firebaseConfig } from './core.config';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig, 'angular-recipe-book'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CoreRoutingModule,
    FormsModule
  ],
  declarations: [
    AuthComponent,
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    HeaderComponent,
    CoreRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class CoreModule { }
