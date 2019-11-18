import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Import angular-fusioncharts
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as Charts from "fusioncharts/fusioncharts.charts";

import * as Widgets from "fusioncharts/fusioncharts.widgets";

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

import {DialogModule} from 'primeng/dialog';

import {InputTextareaModule} from 'primeng/inputtextarea';

import {InputTextModule} from 'primeng/inputtext';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';
import {AccordionModule} from 'primeng/accordion';
import {TreeTableModule} from 'primeng/treetable';
import {FieldsetModule} from 'primeng/fieldset';




import { DetailedGeneralHealthComponent } from './detailed-general-health/detailed-general-health.component';
import { DetailedEducationalHealthComponent } from './detailed-educational-health/detailed-educational-health.component';
import { DetailedCareerHealthComponent } from './detailed-career-health/detailed-career-health.component';
import { HealthDashboardComponent } from './health-dashboard/health-dashboard.component';
import { MessageService } from 'primeng/api';
import { DetailedGeneralHealthReportComponent } from './detailed-general-health-report/detailed-general-health-report.component';
import { NodeService } from './services/nodeservice.service';



// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, Widgets, FusionTheme);














@NgModule({
  declarations: [
    AppComponent,
    DetailedGeneralHealthComponent,
    DetailedEducationalHealthComponent,
    DetailedCareerHealthComponent,
    HealthDashboardComponent,
    DetailedGeneralHealthReportComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FusionChartsModule,
    CardModule,
    ButtonModule,
    DialogModule,
    InputTextareaModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    PanelModule,
    TabViewModule,
    ToastModule,
    AccordionModule,
    TreeTableModule,
    FieldsetModule,

  ],
  providers: [MessageService,NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
