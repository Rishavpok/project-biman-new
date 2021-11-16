import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsComponent } from './shops.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
    declarations: [ShopsComponent],
    imports:[
        CommonModule,
        ShopRoutingModule
    ]
})

export class ShopModule{}