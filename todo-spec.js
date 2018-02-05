  describe('Protractor Demo App', function() {
      it('user should login', function() {

        browser.get('https://vb-web-qas.azurewebsites.net');
        

        var logEmail = element(by.id('email'));
        var logPassword = element(by.id('password'));
        var loginButton = element(by.className('default vb-band-button'));


        logEmail.sendKeys('x');
        logPassword.sendKeys('x');
        loginButton.click();
        

        expect(browser.getCurrentUrl()).toBe('https://vb-web-qas.azurewebsites.net/#/tenants');




    });
  });