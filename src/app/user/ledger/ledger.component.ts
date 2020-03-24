import { Component, OnInit } from "@angular/core";
import { Data } from "@angular/router";
import { DatePipe } from "@angular/common";
import { Ledger } from "src/app/models/ledger";
import { LedgerService } from "src/app/services/ledger.service";
import { Title } from '@angular/platform-browser';

@Component({
  selector: "app-ledger",
  templateUrl: "./ledger.component.html",
  styleUrls: ["./ledger.component.css"]
})
export class LedgerComponent implements OnInit {
  reportDate: any;
  ledgerList$: any;
  constructor(private ledgerService: LedgerService,private titleService : Title) { }

  ngOnInit() {
    this.titleService.setTitle("Ledger");
    this.reportDate = new Date();
    this.ledgerList$ = this.ledgerService.getAll();
    console.log(this.ledgerList$);
  }
  btnRight() {
    //date increment
  }
  btnLeft() {
    //date decrement
  }
}
