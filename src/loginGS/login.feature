@loginGS
Feature: Inicio de Sesion en SWAGLABS

  Scenario: Inicio de sesion exitoso
    Given Yo como usuario de SWAGLABS me encuentro en la pagina de login
    When ingreso mi usuario "standard_user" y mi contraseña "secret_sauce"
    Then el logueo se realiza correctamente redirigiendome a la pagina principal