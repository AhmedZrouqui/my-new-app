import { Component, OnInit } from "@angular/core";
import { UserAccount } from "../../models/UserAccount";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  accounts: UserAccount[];
  connected: string;
  i: number = 0;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  onSubmit(login: string, password: string): void {
    this.i = 0;
    do {
      if (this.accounts[this.i].login == login) {
        if (this.accounts[this.i].password == password) {
          this.login();
          this.i = 0;
        } else this.loginerror("password");
      } else this.loginerror("login");
    } while (this.i != 0);
    console.log(this.connected);
  }

  login() {
    this.connected = "connected successfuly!";
  }

  loginerror(error: string) {
    this.i++;
    if (error == "login") {
      this.connected = "login incorrecte, veuillez réessayer!";
    } else this.connected = "password incorrecte, veuillez réessayer!";
  }
}
