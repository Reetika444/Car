import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';


import { DataService } from './Services/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerModuleFactory } from '@angular/core/src/linker/ng_module_factory_loader';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { SearchPipe } from './search.pipe';
import { AuthGuard } from './auth.guard';
import {NgxSpinnerModule} from 'ngx-spinner';
import { CarComponent } from './car/car.component';
import { CarDetailsService } from './Services/car-details.service';

const appRoutes:Routes=[
  // {path:'register',component:RegisterComponent},
  // {path:'movies',component:MoviesComponent,canActivate: [AuthGuard]},
  // {path:'login',component:LoginComponent},
  // {path:'', component: LoginComponent},
  {path:'car', component:CarComponent},
  {path: '**', redirectTo: '',}
];

@NgModule({
  declarations: [
    AppComponent,
  
    RegisterComponent,
    MoviesComponent,
    LoginComponent,
    SearchPipe,
    CarComponent,
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
  ],
  providers: [DataService,AuthGuard,CarDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
