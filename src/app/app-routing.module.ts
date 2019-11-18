import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedCareerHealthComponent } from './detailed-career-health/detailed-career-health.component';
import { DetailedGeneralHealthComponent } from './detailed-general-health/detailed-general-health.component';
import { DetailedEducationalHealthComponent } from './detailed-educational-health/detailed-educational-health.component';
import { HealthDashboardComponent } from './health-dashboard/health-dashboard.component';
import { DetailedGeneralHealthReportComponent } from './detailed-general-health-report/detailed-general-health-report.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'app-health-dashboard', pathMatch: 'full'},
  {path: 'app-detailed-career-health', component: DetailedCareerHealthComponent, pathMatch: 'full'},
  {path: 'app-detailed-general-health', component: DetailedGeneralHealthComponent, pathMatch: 'full'},
  {path: 'app-detailed-educational-health', component: DetailedEducationalHealthComponent, pathMatch: 'full'},

  {path: 'app-detailed-general-health-report', component: DetailedGeneralHealthReportComponent, pathMatch: 'full'},


  {path: '**', component: HealthDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }


