import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PriceComponent } from './components/price/price.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'price', component: PriceComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [ AuthGuard ]},
  { path: 'callback', component: CallbackComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
