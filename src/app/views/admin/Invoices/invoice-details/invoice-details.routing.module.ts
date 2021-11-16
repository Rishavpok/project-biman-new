import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InvoiceDetailsComponent } from "./invoice-details.component";

export const routes: Routes = [
    {
        path: "",
        component: InvoiceDetailsComponent,
        data: {
            title: "Invoice Details"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InvoiceDetailsRoutingModule {}