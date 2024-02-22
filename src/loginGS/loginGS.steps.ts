import { pageProvider } from "@testing/wdio-page-objects";
import { loginGSPage } from "./loginGS.page";
import { dashboardPage } from "./dashboardGS.page";
import { Given, When, Then, World } from "@testing/cucumber-runner";
import { expect } from "chai";

export class loginGSStep {
  private loginGSPage: loginGSPage;
  private dashboardPage: dashboardPage;

  constructor() {
    this.loginGSPage = new loginGSPage();
    this.dashboardPage = new dashboardPage();
  }

  @Given(/^Yo como usuario de SWAGLABS me encuentro en la pagina de login$/)
  navigateToLoginPage() {
    pageProvider.go(loginGSPage);
  }

  @When(/^ingreso mi usuario "([^"]*)" y mi contraseña "([^"]*)"$/)
  enterCredentials(username: string, password: string) {
    this.loginGSPage.enterCredentials(username, password);
  }

  @Then(/^el logueo se realiza correctamente redirigiendome a la pagina principal$/)
  verifySuccessfulLogin() {
    expect(this.dashboardPage.obtainText()).to.be.true;
  }

}