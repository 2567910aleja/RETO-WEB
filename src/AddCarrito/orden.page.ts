import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";

const selectors = {
  categoriaTextField: `//h1[normalize-space()='Celulares']`,
  cartAdd: `.pa4.pointer.vtex-minicart-2-x-openIconContainer`
};

@PageContext({
  path: '/',
  wrapper: `body`, //Padre  o nodo principal
})

export class dashboardPage extends Page {

  obtainText() {
    $(selectors.categoriaTextField).waitForDisplayed(5000)
    return $(selectors.categoriaTextField).isExisting();

  }

  obtainCartText() {
    $(selectors.cartAdd).waitForDisplayed(5000)
    $(selectors.cartAdd).scrollIntoView();
    return $(selectors.cartAdd).isExisting();
  }

}