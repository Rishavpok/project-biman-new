import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/public/login/login.component';
import { RegisterationComponent } from './views/public/registeration/registeration.component';
import { MainComponent } from './views/admin/layout/main/main.component';
import { HeaderComponent } from './views/admin/includes/header/header.component';
import { SidebarComponent } from './views/admin/includes/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
