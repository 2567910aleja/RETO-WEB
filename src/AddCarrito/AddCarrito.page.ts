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
  btn_agregar: `//p[normalize-space()='Agregar']`,
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
  btn_envio: `div[class='w-100 flex justify-center items-center']`
}

@PageContext({
  path: '/',
  wrapper: 'body'//Nodo Padre
})

export class AddProducto extends Page {

  // funcion del modal
  enterDataModal(modal_departamento: string, modal_ciudad: string, modal_direccion: string) {
    $(selectors.btn_envio).click();
    $(selectors.modal_departamento_select).click();
    //Recorro la palabra y activo el evento de cada letra
    for (let i = 0; i < modal_departamento.length - 1; i++) {
      browser.keys(modal_departamento[i].toLocaleLowerCase());
    }
    browser.keys('\uE007'); //Enter

    $(selectors.modal_ciudad).click()

    for (let i = 0; i < modal_ciudad.length - 1; i++) {
      browser.keys(modal_ciudad[i].toLocaleLowerCase());
    }
    browser.keys('\uE007'); //Enter

    $(selectors.modal_direccion).click();
    $(selectors.modal_direccion).setValue(modal_direccion);
    $(selectors.btn_modal_confirmar).click();
    browser.pause(20000);
  }

  // Da click en el menu de categoria para desplegarlo
  clickCategoria() {
    $(selectors.categorias).click(),
      browser.pause(5000)
  }
  // Da click en la categoria y despliega un menu tipo overmouse 
  clickTecnologia() {
    $(selectors.tecnologia).click(),
      browser.pause(5000)
  }
  //Da click en la subcategoria para entrar a la vista de dicha subcategoria
  clickSmartphones() {
    $(selectors.smartphone).click(),
      browser.pause(5000)
  }


  selectRandomProducts() {
    const productoLista = $$(selectors.lista_productos); // Obtener todos los productos
    const randomProductIndexes = this.generateRandomIndexes(productoLista.length, 3); // Generar 3 índices aleatorios
    browser.pause(5000)

    // Seleccionar aleatoriamente 3 productos
    for (const index of randomProductIndexes) {
      const product = productoLista[index];
      product.$(selectors.btn_agregar).click(); // Agregar producto al carrito
    }
    browser.pause(5000)

    // Ir al carrito de compras
    $(selectors.verificacion_carrito).click();
    browser.pause(5000)
  }

  // Función para generar índices aleatorios únicos
  generateRandomIndexes(max: number, count: number): number[] {
    const indexes = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;

  }
}