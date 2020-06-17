import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderStatusComponent } from './orderstatus.component';


const routes: Routes = [
    {
        path: '',
        component: OrderStatusComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderStatusRoutingModule { }
