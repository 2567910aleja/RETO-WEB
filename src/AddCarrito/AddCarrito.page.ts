import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";

const selectors = {
  optionlogin: `.flex.pv2.items-center`,
  email: `input[placeholder='Escribe tu correo electrónico']`,
  password: `input[placeholder='Escribe tu contraseña']`,
  btnlogin: `button[type='submit']`,
  optionEmail: `(//button[@type='button'])[6]`,
  categorias: `//img[@alt='alt text']`,
  tecnologia: `(//div[contains(text(),'Tecnología')])[1]`,
  smartphone: `//a[normalize-space()='Smartphones']`,
  btn_agregar: `(//button[contains(@type,'button')])[5]`,
  //btn_agregar: `//p[normalize-space()='Agregar']`,
  verificacion_carrito: `//h3[normalize-space()='Carrito']`,
  lista_productos: `.vtex-search-result-3-x-galleryItem`,
  // selectores del modal
  modal: `.undefined.flex.flex-column`,
  modal_departamento_select: `//div[contains(text(),'Selecciona un departamento')]`,
  modal_ciudad_select: `//div[contains(text(),'Selecciona una ciudad')]`,
  //modal_departamento: `.css-yiuvdt .css-1g6gooi`,
  modal_ciudad: `//div[contains(text(),'Selecciona una ciudad')]`,
  modal_direccion: `//input[@id='autocomplete']`,
  btn_modal_confirmar: `//div[contains(text(),'Confirmar')]`,
  amount: `input[type="tel"].vtex-numeric-stepper__input`,
  btn_envio: `div[class='w-100 flex justify-center items-center']`,
};

@PageContext({
  path: "/",
  wrapper: "body", //Nodo Padre
})
export class AddProducto extends Page {
  // funcion del modal
  enterDataModal(
    modal_departamento: string,
    modal_ciudad: string,
    modal_direccion: string
  ) {
    $(selectors.btn_envio).click();
    $(selectors.modal_departamento_select).click();
    //Recorro la palabra y activo el evento de cada letra
    for (let i = 0; i < modal_departamento.length - 1; i++) {
      browser.keys(modal_departamento[i].toLocaleLowerCase());
    }
    browser.keys("\uE007"); //Enter

    $(selectors.modal_ciudad).click();

    for (let i = 0; i < modal_ciudad.length - 1; i++) {
      browser.keys(modal_ciudad[i].toLocaleLowerCase());
    }
    browser.keys("\uE007"); //Enter

    $(selectors.modal_direccion).click();
    $(selectors.modal_direccion).setValue(modal_direccion);
    $(selectors.btn_modal_confirmar).click();
    browser.pause(20000);
  }

  // Da click en el menu de categoria para desplegarlo
  clickCategoria() {
    $(selectors.categorias).click(), browser.pause(5000);
  }
  // Da click en la categoria y despliega un menu tipo overmouse
  clickTecnologia() {
    $(selectors.tecnologia).click(), browser.pause(5000);
  }
  //Da click en la subcategoria para entrar a la vista de dicha subcategoria
  clickSmartphones() {
    $(selectors.smartphone).click(), browser.pause(5000);
  }

  selectRandomProducts() {
    for (let i = 0; i < 3; i++) {
      // Obtener todos los productos
      const lista_productos = $$(selectors.lista_productos);

      // Seleccionar un producto aleatorio
      const randomIndex = Math.floor(Math.random() * lista_productos.length);
      const randomProduct = lista_productos[randomIndex];

      randomProduct.scrollIntoView();

      /*const headerHeight = 100;
      const productPosition = randomProduct.getLocation("y") - headerHeight;

      // hacer un scroll a una posicion visible
      browser.execute((position) => {
        window.scrollTo(0, position);
      }, productPosition);
*/
      // Encontrar el botón de agregar asociado al producto y hacer clic en él
      const btn_agregar = randomProduct.$(selectors.btn_agregar);
      btn_agregar.click();
      browser.pause(5000);

      function obtenerNumeroAleatorio(): number {
        // Genera un número aleatorio entre 1 y 5
        const numeroAleatorio = Math.floor(Math.random() * 5) + 1;
        return numeroAleatorio;
      }

      const numeroAleatorio = obtenerNumeroAleatorio();

      $(selectors.amount).click(),
        browser.keys('\uE017');
      $(selectors.amount).setValue(numeroAleatorio),
        browser.pause(5000)
    }

    // Ir al carrito de compras
    $(selectors.verificacion_carrito).click();
    browser.pause(5000);
  }
}
