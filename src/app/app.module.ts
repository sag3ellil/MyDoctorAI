import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HumanBodyComponent } from './human-body/human-body.component';
import { RouterModule, Routes } from '@angular/router';
import { CommunService} from './commun.service'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SymthomsComponent } from './symthoms/symthoms.component';
import {MatDialogModule} from "@angular/material/dialog";
import { SympthomDetailsComponent } from './sympthom-details/sympthom-details.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FormControl, Validators  } from '@angular/forms';
import { NgForm } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ResultComponent } from './result/result.component';
import { HttpClientModule } from '@angular/common/http';
import {CdkTextareaAutosize, TextFieldModule} from '@angular/cdk/text-field';

import {GbtapiService} from "./services/gbtapi.service";
import { WelcomeComponent } from './welcome/welcome.component'
const routes : Routes = [
  {path:'',component:WelcomeComponent},
{ path:'humanbody',component: HumanBodyComponent},
{ path:'symthoms',component: SymthomsComponent},
{ path:'information',component: UserInfoComponent},
{ path:'result',component: ResultComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HumanBodyComponent,
    SymthomsComponent,
    UserInfoComponent,
    ResultComponent,
    WelcomeComponent,
   
   
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    SympthomDetailsComponent,
    FormsModule,
    ReactiveFormsModule,MatSelectModule,MatInputModule,MatFormFieldModule,MatCheckboxModule,
    TextFieldModule,
    HttpClientModule,
 
    RouterModule.forRoot(routes)
  ],
  exports:[SympthomDetailsComponent],
  providers: [CommunService,GbtapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
