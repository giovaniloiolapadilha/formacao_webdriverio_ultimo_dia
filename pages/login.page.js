export class LoginPage {
    inputUsername = $('#username');
    inputPassword = $('#password');
    btnSubmit = $('button[type="submit"]');

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}
