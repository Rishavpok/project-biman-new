import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceDetailsComponent } from './invoice-details.component';
import { InvoiceDetailsRoutingModule } from './invoice-details.routing.module';

@NgModule({
    declarations: [InvoiceDetailsComponent],
    imports:[
        CommonModule,
        InvoiceDetailsRoutingModule
    ]
})

export class InvoiceDetailsModule{}