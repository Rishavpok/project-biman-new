import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReadMailsComponent } from "./read-mails.component";

export const routes: Routes = [
    {
        path: "",
        component: ReadMailsComponent,
        data: {
            title: "read-mails"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReadMailRoutingModule {}