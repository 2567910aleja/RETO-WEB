Feature: Añadir productos al carrito de compras
  Background:
    Given Yo como usuario de olimpica me encuentro en la pagina de login
    When ingreso mi correo "alejandra.fajardo.incodelca@gmail.com" y mi contraseña "Alejandra1234"
    Then el logueo se realiza correctamente redirigiendome a la pagina principal
  @productos
  Scenario: Se añaden productos al carrito de forma aleatoria
    Given yo como usuario de la pagina olimpica me encuentro en la pagina principal
    And doy clic al menu desplegable de categoria
    And doy clic en la categoria tecnologia
    And doy clic en la subcategoria smartphone
    And nos muestra los productos relacionados con dicha categoria
    When añadimos 3 productos de manera aleatorias al carrito
    Then Los productos seleccionados anteriormente se agregan al carrito de compras de manera correcta