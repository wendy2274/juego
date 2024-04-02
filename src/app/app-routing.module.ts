import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './pages/tablero/tablero.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [{ path: '', component: TableroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
