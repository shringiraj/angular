import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListingsComponent } from "./listings/listings.component";
import { LedgerComponent } from "./ledger/ledger.component";

const routes: Routes = [
  { path: "", component: ListingsComponent },
  { path: "ledger", component: LedgerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
