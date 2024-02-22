import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";

const selectors = {
  user: '[id=user-name]',
  password: '[id=password]',
  button_login: '[id="login-button"]'
}

@PageContext({
  path: '/v1/',
  wrapper: 'body'//Nodo Padre
})

export class loginGSPage extends Page {
  enterCredentials(username: string, password: string) {
    $(selectors.user).setValue(username),
      $(selectors.password).setValue(password),
      $(selectors.button_login).click(),
      browser.pause(5000)
  }
}