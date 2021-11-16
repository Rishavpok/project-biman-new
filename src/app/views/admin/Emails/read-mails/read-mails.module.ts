import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadMailsComponent } from './read-mails.component';
import { ReadMailRoutingModule } from './readdmails-routing.module';

@NgModule({
    declarations: [ReadMailsComponent],
    imports:[
        CommonModule,
        ReadMailRoutingModule
    ]
})

export class ReadMailModule{}