import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { UserAccount } from "../models/UserAccount";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  accountsUrl: string =
    "https://my-json-server.typicode.com/AhmedZrouqui/mydb/accounts";

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<UserAccount[]> {
    return this.http.get<UserAccount[]>(this.accountsUrl);
  }
}
