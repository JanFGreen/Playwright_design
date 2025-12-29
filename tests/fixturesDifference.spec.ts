import {expect, test, chromium} from '@playwright/test';

//Test without page fixture - to manage browser
test('sing in without page fixture', async () => {
const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto('https://binaryville.com');
const singInButton = page.getByRole('link', {name: /account/i});
await expect(singInButton).toBeVisible();

await browser.close();
});

//Test which using page fixture - to manage browser -> less code, less setup/teardown
test('sing in with page fixture', async ({page}) => {
await page.goto('https://binaryville.com');
const singInButton = page.getByRole('link', {name: /account/i});
await expect(singInButton).toBeVisible();
});

