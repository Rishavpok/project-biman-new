import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InboxComponent } from "./inbox.component";

export const routes: Routes = [
    {
        path: "",
        component: InboxComponent,
        data: {
            title: "Inbox-mails"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InboxRoutingModule {}