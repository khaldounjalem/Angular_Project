import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailListPrintComponent } from './payment-details/payment-detail-list-print/payment-detail-list-print.component';
import { UserComponent } from './user/user.component';
import { WebsitetestComponent } from './websitetest/websitetest.component';
import { PaymentDetailListMaterialComponent } from './payment-details/payment-detail-list-material/payment-detail-list-material.component';


//const routes: Routes = [
 // {path:'',redirectTo:'/user/login',pathMatch:'full'},
 // {
 //   path: 'user', component: UserComponent,
 //   children: [
 //     { path: 'registration', component: RegistrationComponent },
 //     { path: 'login', component: LoginComponent }
 //   ]
 // },
 // {path:'home',component:HomeComponent}, // ,canActivate:[AuthGuard]
 // {path:'forbidden',component:ForbiddenComponent},
 // {path:'adminpanel',component:AdminPanelComponent,canActivate:[AuthGuard],data :{permittedRoles:['AdminKhaldoun']}}
//];
const routes: Routes = [
  {
    path:'',
    redirectTo: 'Websitetest',
    pathMatch:'full'
  },

  {
    path:'adminpanel',
    component:AdminPanelComponent,
    canActivate:[AuthGuard],
    data :{permittedRoles:['AdminKhaldoun']},
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard],
    data :{permittedRoles:['AdminKhaldoun']},
    pathMatch:'full'
  },
  //{
  //  path:'user',
  //  redirectTo:'/user/login',
  //  pathMatch:'full'
  //},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }

    ]
  },
 
  //{
  //  path:'login',
  //  component:LoginComponent,
  //  pathMatch:'full'
  //},
 // {
 //   path:'registration',
 //   component:RegistrationComponent,
 //   pathMatch:'full'
 // },
  {
    path:'PaymentDetails',
    component:PaymentDetailsComponent,
    pathMatch:'full'
  },
  {
    path:'PaymentDetailListPrint',
    component:PaymentDetailListPrintComponent,
    pathMatch:'full'
  },
  {
    path:'PaymentDetailListMaterial',
    component:PaymentDetailListMaterialComponent,
    pathMatch:'full'
  },
 
  {
    path:'Websitetest',
    component:WebsitetestComponent,
    pathMatch:'full'
  },
  
  {
  path:'**',
  component:ForbiddenComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
