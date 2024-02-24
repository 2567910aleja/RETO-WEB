@login
Feature: Inicio de Sesion en olimpica

  Scenario: Inicio de sesion exitoso
    Given Yo como usuario de olimpica me encuentro en la pagina de login
    When ingreso mi correo "alejandra.fajardo.incodelca@gmail.com" y mi contraseña "Alejandra1234"
    Then el logueo se realiza correctamente redirigiendome a la pagina principal