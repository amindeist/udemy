import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtModule} from '@auth0/angular-jwt';
import {FileUploadModule} from 'ng2-file-upload';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {AuthService} from './_services/auth.service';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ErrorInterceptorProvider} from './_services/error.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MemberListComponent} from './members/member-list/member-list.component';
import {ListsComponent} from './lists/lists.component';
import {MessagesComponent} from './messages/messages.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {MemberCardComponent} from './members/member-card/member-card.component';
import {MemberDetailComponent} from './members/member-detail/member-detail.component';
import {MemberDetailResolver} from './_resolvers/member-detail.resolver';
import {AlertifyService} from './_services/alertify.service';
import {AuthGuard} from './_guards/auth.guard';
import {UserService} from './_services/user.service';
import {MemberListResolver} from './_resolvers/member-list.resolver';
import {NgxGalleryModule} from 'ngx-gallery';
import {MemberEditComponent} from './members/member-edit/member-edit.component';
import {MemberEditResolver} from './_resolvers/member-edit.resolver';
import {PreventUnsavedChanges} from './_guards/prevent-unsaved-changes.guard';
import {PhotoEditorComponent} from './members/photo-editor/photo-editor.component';
import {BsDatepickerModule, BsDropdownModule, TabsModule} from 'ngx-bootstrap';
import {TimeAgoPipe} from 'time-ago-pipe';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ListsResolver } from './_resolvers/lists.resolver';


export function tokenGetter() {
  return localStorage.getItem('token');
}

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: {enable: false},
    rotate: {enable: false}
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    FileUploadModule,
    DpDatePickerModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:44326'],
        blacklistedRoutes: ['localhost:44326/api/auth']
      }
    }),
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig},
    PreventUnsavedChanges,
    ListsResolver,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
