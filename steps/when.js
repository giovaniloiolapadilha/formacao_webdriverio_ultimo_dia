import { When } from '@wdio/cucumber-framework';

import { CheckboxesPage } from '../pages/checkboxes.page.js';
import { LoginPage } from '../pages/login.page.js';

const login = new LoginPage();
const checkboxes = new CheckboxesPage();

When('I login with {string} and {string}', async (username, password) => {
    await login.inputUsername.setValue(username);
    await login.inputPassword.setValue(password);
    await login.btnSubmit.click();
});

When('I checked the first checkbox', async () => {
    await checkboxes.checkbox1.click();
});

When('I unchecked the second checkbox', async () => {
    await checkboxes.checkbox2.click();
});
