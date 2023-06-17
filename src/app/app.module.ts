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

const routes : Routes = [
{ path:'',component: HumanBodyComponent},
{ path:'symthoms',component: SymthomsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HumanBodyComponent,
    SymthomsComponent,
    UserInfoComponent,
   
   
  

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
 
    RouterModule.forRoot(routes)
  ],
  exports:[SympthomDetailsComponent],
  providers: [CommunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
