import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GewichtInvoerenComponent } from './Gewicht-invoeren/Gewicht-invoeren.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';






@NgModule({
   declarations: [
      AppComponent,
      GewichtInvoerenComponent,
   ],
   imports: [
      BrowserModule,
      MatButtonModule,
      MatCardModule,
      AppRoutingModule,
      MatInputModule,
      FormsModule,
      MatFormFieldModule,
      MatDatepickerModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
