import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListingsComponent } from './listings/listings.component';
import { LedgerComponent } from './ledger/ledger.component';



@NgModule({
  declarations: [ListingsComponent, LedgerComponent],
  imports: [
    CommonModule,
    UserRoutingModule,

  ]
})
export class UserModule { }
