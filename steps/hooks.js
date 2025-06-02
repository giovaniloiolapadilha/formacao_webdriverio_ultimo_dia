import { AfterStep } from '@wdio/cucumber-framework';

AfterStep(async ({ result, pickle }) => {
    if (result.status === 'FAILED') { 
        const screenshot = await browser.takeScreenshot(); 
        await allure.addAttachment( 
            Buffer.from(screenshot, 'base64'),
            'image/png' 
        );
    }
});
