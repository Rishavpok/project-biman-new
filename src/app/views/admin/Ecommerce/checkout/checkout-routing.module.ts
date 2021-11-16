import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import  { CheckoutComponent } from './checkout.component';

export const routes: Routes = [
    {
        path: "",
        component: CheckoutComponent,
        data: {
            title: "checkout"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CheckoutRoutingModule {}