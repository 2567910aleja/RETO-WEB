import { pageProvider } from "@testing/wdio-page-objects";
import { AddProducto } from "./AddCarrito.page";
import { dashboardPage } from "./orden.page";
import { Given, When, Then, World } from "@testing/cucumber-runner";
import { expect } from "chai";

export class AddProductoStep {
  private AddProducto: AddProducto;
  private dashboardPage: dashboardPage;

  constructor() {
    this.AddProducto = new AddProducto();
    this.dashboardPage = new dashboardPage();
  }

  @Given(/^yo como usuario de la pagina olimpica me encuentro en la pagina principal$/)
  navigateToLoginPage() {
    pageProvider.go(AddProducto);
  }

  @When(/^ingreso mi departamento "([^"]*)", ciudad "([^"]*)" y mi direccion "([^"]*)" para el envio$/)
  enterDataModal(modal_departamento: string, modal_ciudad: string, modal_direccion: string) {
    this.AddProducto.enterDataModal(modal_departamento, modal_ciudad, modal_direccion);
  }

  @When(/^doy clic al menu desplegable de categoria$/)
  clickHamburguesaMenu() {
    this.AddProducto.clickCategoria();
  }

  @When(/^doy clic en la categoria tecnologia$/)
  clickCategoria() {
    this.AddProducto.clickTecnologia();
  }

  @When(/^doy clic en la subcategoria smartphone$/)
  clickSubcategoria() {
    this.AddProducto.clickSmartphones();
  }

  @When(/^nos muestra los productos relacionados con dicha categoria$/)
  verifylistProducts() {
    expect(this.dashboardPage.obtainText()).to.be.true;
  }


  @When(/^añadimos 3 productos de manera aleatorias al carrito$/)
  verifySuccessfulAdd() {
    console.error("añadir")
    this.AddProducto.selectRandomProducts()
  }

  @Then(/^Los productos seleccionados anteriormente se agregan al carrito de compras de manera correcta$/)
  verifySuccessAddcart() {
    expect(this.dashboardPage.obtainCartText()).to.be.true;
  }
}