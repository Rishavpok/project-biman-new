import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import  { AddProductComponent } from "./add-product.component";

export const routes: Routes = [
    {
        path: "",
        component: AddProductComponent,
        data: {
            title: "Add product"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddProductRoutingModule {}