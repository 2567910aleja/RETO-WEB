import { pageProvider } from "@testing/wdio-page-objects";
import { loginPage } from "./login.page";
import { dashboardPage } from "./dashboard.page";
import { Given, When, Then, World } from "@testing/cucumber-runner";
import { expect } from "chai";

export class loginStep {
  private loginPage: loginPage;
  private dashboardPage: dashboardPage;

  constructor() {
    this.loginPage = new loginPage();
    this.dashboardPage = new dashboardPage();
  }

  @Given(/^Yo como usuario de olimpica me encuentro en la pagina de login$/)
  navigateToLoginPage() {
    pageProvider.go(loginPage);
  }

  @When(/^ingreso mi correo "([^"]*)" y mi contraseña "([^"]*)"$/)
  enterCredentials(email: string, password: string) {
    this.loginPage.enterCredentials(email, password);
  }

  @Then(/^el logueo se realiza correctamente redirigiendome a la pagina principal$/)
  verifySuccessfulLogin() {
    expect(this.dashboardPage.obtainText()).to.be.true;
  }

}