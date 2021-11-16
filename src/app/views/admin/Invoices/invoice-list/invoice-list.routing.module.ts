import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InvoiceListComponent } from "./invoice-list.component";

export const routes: Routes = [
    {
        path: "",
        component: InvoiceListComponent,
        data: {
            title: "Invoice List"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InvoiceListRoutingModule {}