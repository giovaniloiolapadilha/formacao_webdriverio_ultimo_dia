import { When } from '@wdio/cucumber-framework';

import { CheckboxesPage } from '../pages/checkboxes.page.js';
import { LoginPage } from '../pages/login.page.js';

const login = new LoginPage();
const checkboxes = new CheckboxesPage();

When('I login with {string} and {string}', async (username, password) => {
    try {
        await login.login(username, password);
    } catch (error) {
        console.error('Erro no login:', error);
        throw error;
    }
});

When('I checked the first checkbox', async () => {
    await checkboxes.checkboxes[0].click();
});

When('I unchecked the second checkbox', async () => {
    await checkboxes.checkboxes[1].click();
});
