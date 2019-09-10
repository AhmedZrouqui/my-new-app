import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserAccount } from "../models/UserAccount";

@Injectable({
  providedIn: "root"
})
export class EnrollmentService {
  url: string = "";
  constructor(private http: HttpClient) {}
}
