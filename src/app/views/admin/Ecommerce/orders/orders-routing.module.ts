import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import   {OrdersComponent} from './orders.component';

export const routes: Routes = [
    {
        path: "",
        component: OrdersComponent,
        data: {
            title: "Order"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule {}