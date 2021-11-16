import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailsComponent } from "./product-details.component";

export const routes: Routes = [
    {
        path: "",
        component: ProductDetailsComponent,
        data: {
            title: "Product Details"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductDetailsRoutingModule {}