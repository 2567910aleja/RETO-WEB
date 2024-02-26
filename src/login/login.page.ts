import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";

const selectors = {
  optionlogin: `.flex.pv2.items-center`,
  email: `input[placeholder='Escribe tu correo electrónico']`,
  password: `input[placeholder='Escribe tu contraseña']`,
  btnlogin: `button[type='submit']`,
  optionEmail: `(//button[@type='button'])[6]`,
  categorias: `//img[@alt='alt text']`,
  tecnologia: `(//div[contains(text(),'Tecnología')])[1]`,
  smartphone: `//a[normalize-space()='Smartphones']`
  //agregar nuevos selectores agregados en compraspage


}

@PageContext({
  path: '/',
  wrapper: 'body'//Nodo Padre
})

export class loginPage extends Page {
  enterCredentials(email: string, password: string) {
    $(selectors.optionlogin).click(),
      $(selectors.optionEmail).click(),
      $(selectors.email).setValue(email),
      $(selectors.password).setValue(password),
      $(selectors.btnlogin).click(),
      browser.pause(10000)
  }
}
