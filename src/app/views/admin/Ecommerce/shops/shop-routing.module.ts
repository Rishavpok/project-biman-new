import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import  { ShopsComponent } from './shops.component';

export const routes: Routes = [
    {
        path: "",
        component: ShopsComponent,
        data: {
            title: "shop"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule {}