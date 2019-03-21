import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { PositionComponent } from './position/position.component';
import { HomeComponent } from './home/home.component';
import { ReactiveDynamicComponent } from './reactive-dynamic/reactive-dynamic.component';
import { ReactiveTableComponent } from './reactive-table/reactive-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PositionComponent,
    HomeComponent,
    ReactiveDynamicComponent,
    ReactiveTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
