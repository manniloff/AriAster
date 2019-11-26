import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonitoringComponent } from './pages/monitoring/monitoring.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { WebsocketService } from './utils/websocket.service';
import {ChartModule} from 'primeng/chart';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MonitoringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
