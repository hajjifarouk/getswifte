import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddRideComponent } from './pages/add-ride/add-ride.component';
import { RideDetailComponent } from './pages/ride-detail/ride-detail.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ModuleWithProviders } from '@angular/core';
import { Route,RouterModule,Routes } from '@angular/router';
const appRoutes:Routes=[
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    },
    {
        path:'addride',
        component:AddRideComponent
    },
    {
        path:'terms',
        component:TermsComponent
    },
    {
        path:'ridedetail',
        component:RideDetailComponent
    }
   
];

export const  Routing :  ModuleWithProviders=RouterModule.forRoot(appRoutes);
