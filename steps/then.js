import { Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import { CheckboxesPage } from '../pages/checkboxes.page.js';
import { SecurePage } from '../pages/secure.page.js';

const secure = new SecurePage();
const checkboxes = new CheckboxesPage();

Then('I should see a flash message saying {string}', async (message) => {
    await expect(secure.flashAlert).toBeExisting();
    await expect(secure.flashAlert).toHaveText(expect.stringContaining(message));
});

Then('should show the title Checkboxes', async () => {
    await expect(checkboxes.titleCheckboxes).toBeDisplayed();
    await expect(checkboxes.titleCheckboxes).toHaveText('Checkboxes');
});

Then('the first checkbox should be checked', async () => {
    await expect(checkboxes.checkboxes[0]).toBeChecked();
});

Then('second checkbox should be unchecked', async () => {
    await expect(checkboxes.checkboxes[1]).not.toBeChecked();
});
