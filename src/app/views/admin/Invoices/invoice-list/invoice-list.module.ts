import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list.component';
import { InvoiceListRoutingModule } from './invoice-list.routing.module';

@NgModule({
    declarations: [InvoiceListComponent],
    imports:[
        CommonModule,
        InvoiceListRoutingModule
    ]
})

export class InvoiceListModule{}