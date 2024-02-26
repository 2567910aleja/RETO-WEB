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
  lista_productos: `.vtex-search-result-3-x-galleryItem`
}

@PageContext({
  path: '/',
  wrapper: 'body'//Nodo Padre
})

export class AddProducto extends Page {
  clickCategoria() {
    $(selectors.categorias).click(),
      browser.pause(5000)
  }

  clickTecnologia() {
    $(selectors.tecnologia).click(),
      browser.pause(5000)
  }

  clickSmartphones() {
    $(selectors.smartphone).click(),
      browser.pause(5000)
  }

  selectRandomProducts() {
    const productList = $$(selectors.lista_productos); // Obtener todos los productos
    const randomProductIndexes = this.generateRandomIndexes(productList.length, 3); // Generar 3 índices aleatorios
    browser.pause(5000)

    // Seleccionar aleatoriamente 3 productos
    for (const index of randomProductIndexes) {
      const product = productList[index];
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