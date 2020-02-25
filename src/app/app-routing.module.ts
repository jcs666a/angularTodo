import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { UpdateComponent } from './update/update.component';

const appRoutes: Routes = [
  {
    path: 'update/:id',
    component: UpdateComponent,
    canActivate: [AuthGuard]
  }
];
// const appRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
