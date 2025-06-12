import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { RegisterBankComponent } from './RBI/register-bank/register-bank.component';
import { UpdateBankComponent } from './RBI/update-bank/update-bank.component';
import { DashboardComponent } from './RBI/dashboard/dashboard.component';
import { UserComponent } from './user/user/user.component';
import { AllBankComponent } from './RBI/all-bank/all-bank.component';
import { ViewBankComponent } from './RBI/view-bank/view-bank.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminProfileComponent } from './RBI/admin-profile/admin-profile.component';
import { SidebarComponent } from './RBI/sidebar/sidebar.component';
import { DashboardLayoutComponent } from './RBI/dashboard-layout/dashboard-layout.component';
import { ClipboardComponent } from './RBI/clipboard/clipboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

const routes: Routes = [
    {path:'',component:DashboardLayoutComponent
      ,children:[
      {path:'dashboard-data',component:DashboardComponent},
      { path: 'dashboard', component: DashboardLayoutComponent },
       { path: 'sidebar', component: SidebarComponent }, // Route for the profile within the sidebar
      { path: '', redirectTo: '/dashboard-data', pathMatch: 'full' },
      ]
    },
    {path:'viewBank/:id',component:ViewBankComponent},
  {path:'Userlogin',component:UserLoginComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'adminProfile',component:AdminProfileComponent},
  {path:'userRegister',component:UserRegisterComponent},
  {path:'Registerbank',component:RegisterBankComponent},
  {path:'updateBank',component:UpdateBankComponent},
  {path:'user',component:UserComponent},
  {path:'allBank',component:AllBankComponent},
  {path:'cb',component:ClipboardComponent},
  {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
