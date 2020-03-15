import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ledger } from "../models/ledger";

@Injectable({
  providedIn: "root"
})
export class LedgerService {
  private ROOT_URL = "http://localhost:3000/api/ledger";
  constructor(private http: HttpClient) {}
  getAll(): Observable<Ledger[]> {
    return this.http.get<Ledger[]>(this.ROOT_URL+"/index");
  }
}
