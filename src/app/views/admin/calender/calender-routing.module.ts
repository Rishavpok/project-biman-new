import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalenderComponent } from "./calender.component";

export const routes: Routes = [
    {
        path: "",
        component: CalenderComponent,
        data: {
            title: "Calender"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CalenderRoutingModule {}