import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";

const selectors = {
  userTextField: `//div[@class='flex pv2 items-center']`
};

@PageContext({
  path: '/',
  wrapper: `body`, //Padre  o nodo principal
})

export class dashboardPage extends Page {

  obtainText() {
    $(selectors.userTextField).waitForDisplayed(5000)

    return $(selectors.userTextField).isExisting();

  }

}