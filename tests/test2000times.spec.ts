import {test, expect} from '@playwright/test';

// 2000 small tests in 11 minutes for 7 workers

    test(`Login with valid Email 1 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 2 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 3 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 4 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 5 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 6 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 7 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 8 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 9 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 10 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 11 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 12 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 13 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 14 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 15 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 16 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 17 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 18 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 19 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 20 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 21 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 22 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 23 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 24 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 25 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 26 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 27 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 28 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 29 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 30 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 31 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 32 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 33 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 34 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 35 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 36 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 37 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 38 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 39 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 40 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 41 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 42 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 43 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 44 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 45 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 46 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 47 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 48 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 49 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 50 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 51 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 52 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 53 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 54 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 55 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 56 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 57 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 58 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 59 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 60 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 61 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 62 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 63 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 64 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 65 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 66 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 67 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 68 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 69 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 70 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 71 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 72 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 73 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 74 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 75 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 76 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 77 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 78 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 79 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 80 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 81 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 82 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 83 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 84 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 85 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 86 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 87 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 88 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 89 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 90 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 91 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 92 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 93 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 94 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 95 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 96 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 97 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 98 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 99 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 100 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 101 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 102 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 103 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 104 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 105 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 106 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 107 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 108 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 109 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 110 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 111 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 112 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 113 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 114 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 115 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 116 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 117 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 118 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 119 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 120 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 121 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 122 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 123 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 124 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 125 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 126 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 127 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 128 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 129 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 130 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 131 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 132 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 133 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 134 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 135 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 136 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 137 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 138 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 139 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 140 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 141 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 142 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 143 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 144 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 145 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 146 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 147 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 148 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 149 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 150 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 151 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 152 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 153 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 154 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 155 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 156 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 157 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 158 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 159 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 160 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 161 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 162 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 163 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 164 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 165 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 166 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 167 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 168 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 169 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 170 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 171 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 172 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 173 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 174 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 175 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 176 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 177 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 178 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 179 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 180 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 181 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 182 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 183 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 184 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 185 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 186 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 187 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 188 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 189 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 190 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 191 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 192 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 193 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 194 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 195 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 196 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 197 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 198 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 199 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 200 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 201 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 202 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 203 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 204 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 205 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 206 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 207 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 208 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 209 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 210 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 211 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 212 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 213 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 214 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 215 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 216 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 217 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 218 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 219 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 220 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 221 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 222 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 223 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 224 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 225 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 226 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 227 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 228 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 229 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 230 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 231 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 232 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 233 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 234 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 235 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 236 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 237 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 238 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 239 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 240 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 241 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 242 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 243 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 244 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 245 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 246 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 247 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 248 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 249 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 250 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 251 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 252 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 253 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 254 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 255 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 256 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 257 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 258 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 259 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 260 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 261 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 262 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 263 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 264 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 265 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 266 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 267 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 268 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 269 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 270 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 271 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 272 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 273 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 274 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 275 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 276 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 277 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 278 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 279 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 280 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 281 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 282 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 283 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 284 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 285 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 286 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 287 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 288 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 289 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 290 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 291 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 292 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 293 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 294 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 295 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 296 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 297 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 298 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 299 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 300 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 301 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 302 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 303 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 304 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 305 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 306 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 307 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 308 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 309 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 310 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 311 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 312 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 313 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 314 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 315 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 316 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 317 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 318 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 319 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 320 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 321 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 322 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 323 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 324 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 325 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 326 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 327 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 328 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 329 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 330 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 331 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 332 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 333 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 334 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 335 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 336 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 337 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 338 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 339 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 340 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 341 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 342 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 343 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 344 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 345 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 346 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 347 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 348 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 349 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 350 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 351 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 352 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 353 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 354 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 355 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 356 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 357 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 358 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 359 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 360 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 361 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 362 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 363 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 364 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 365 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 366 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 367 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 368 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 369 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 370 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 371 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 372 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 373 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 374 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 375 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 376 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 377 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 378 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 379 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 380 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 381 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 382 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 383 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 384 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 385 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 386 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 387 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 388 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 389 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 390 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 391 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 392 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 393 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 394 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 395 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 396 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 397 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 398 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 399 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 400 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 401 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 402 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 403 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 404 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 405 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 406 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 407 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 408 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 409 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 410 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 411 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 412 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 413 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 414 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 415 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 416 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 417 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 418 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 419 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 420 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 421 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 422 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 423 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 424 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 425 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 426 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 427 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 428 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 429 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 430 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 431 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 432 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 433 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 434 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 435 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 436 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 437 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 438 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 439 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 440 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 441 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 442 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 443 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 444 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 445 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 446 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 447 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 448 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 449 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 450 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 451 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 452 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 453 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 454 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 455 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 456 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 457 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 458 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 459 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 460 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 461 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 462 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 463 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 464 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 465 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 466 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 467 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 468 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 469 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 470 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 471 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 472 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 473 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 474 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 475 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 476 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 477 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 478 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 479 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 480 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 481 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 482 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 483 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 484 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 485 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 486 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 487 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 488 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 489 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 490 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 491 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 492 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 493 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 494 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 495 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 496 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 497 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 498 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 499 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 500 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 501 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 502 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 503 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 504 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 505 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 506 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 507 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 508 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 509 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 510 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 511 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 512 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 513 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 514 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 515 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 516 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 517 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 518 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 519 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 520 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 521 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 522 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 523 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 524 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 525 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 526 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 527 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 528 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 529 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 530 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 531 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 532 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 533 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 534 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 535 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 536 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 537 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 538 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 539 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 540 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 541 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 542 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 543 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 544 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 545 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 546 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 547 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 548 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 549 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 550 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 551 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 552 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 553 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 554 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 555 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 556 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 557 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 558 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 559 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 560 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 561 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 562 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 563 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 564 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 565 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 566 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 567 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 568 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 569 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 570 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 571 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 572 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 573 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 574 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 575 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 576 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 577 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 578 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 579 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 580 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 581 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 582 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 583 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 584 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 585 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 586 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 587 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 588 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 589 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 590 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 591 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 592 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 593 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 594 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 595 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 596 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 597 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 598 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 599 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 600 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 601 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 602 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 603 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 604 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 605 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 606 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 607 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 608 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 609 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 610 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 611 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 612 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 613 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 614 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 615 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 616 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 617 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 618 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 619 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 620 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 621 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 622 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 623 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 624 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 625 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 626 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 627 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 628 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 629 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 630 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 631 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 632 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 633 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 634 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 635 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 636 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 637 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 638 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 639 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 640 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 641 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 642 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 643 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 644 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 645 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 646 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 647 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 648 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 649 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 650 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 651 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 652 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 653 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 654 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 655 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 656 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 657 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 658 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 659 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 660 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 661 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 662 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 663 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 664 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 665 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 666 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 667 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 668 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 669 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 670 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 671 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 672 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 673 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 674 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 675 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 676 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 677 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 678 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 679 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 680 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 681 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 682 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 683 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 684 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 685 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 686 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 687 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 688 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 689 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 690 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 691 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 692 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 693 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 694 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 695 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 696 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 697 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 698 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 699 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 700 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 701 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 702 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 703 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 704 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 705 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 706 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 707 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 708 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 709 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 710 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 711 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 712 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 713 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 714 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 715 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 716 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 717 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 718 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 719 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 720 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 721 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 722 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 723 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 724 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 725 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 726 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 727 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 728 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 729 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 730 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 731 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 732 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 733 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 734 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 735 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 736 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 737 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 738 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 739 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 740 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 741 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 742 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 743 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 744 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 745 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 746 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 747 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 748 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 749 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 750 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 751 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 752 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 753 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 754 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 755 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 756 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 757 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 758 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 759 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 760 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 761 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 762 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 763 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 764 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 765 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 766 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 767 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 768 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 769 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 770 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 771 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 772 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 773 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 774 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 775 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 776 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 777 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 778 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 779 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 780 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 781 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 782 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 783 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 784 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 785 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 786 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 787 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 788 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 789 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 790 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 791 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 792 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 793 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 794 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 795 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 796 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 797 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 798 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 799 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 800 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 801 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 802 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 803 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 804 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 805 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 806 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 807 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 808 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 809 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 810 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 811 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 812 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 813 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 814 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 815 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 816 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 817 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 818 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 819 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 820 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 821 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 822 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 823 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 824 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 825 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 826 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 827 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 828 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 829 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 830 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 831 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 832 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 833 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 834 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 835 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 836 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 837 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 838 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 839 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 840 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 841 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 842 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 843 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 844 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 845 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 846 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 847 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 848 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 849 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 850 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 851 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 852 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 853 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 854 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 855 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 856 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 857 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 858 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 859 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 860 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 861 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 862 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 863 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 864 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 865 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 866 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 867 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 868 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 869 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 870 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 871 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 872 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 873 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 874 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 875 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 876 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 877 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 878 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 879 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 880 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 881 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 882 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 883 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 884 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 885 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 886 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 887 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 888 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 889 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 890 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 891 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 892 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 893 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 894 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 895 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 896 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 897 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 898 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 899 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 900 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 901 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 902 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 903 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 904 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 905 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 906 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 907 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 908 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 909 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 910 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 911 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 912 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 913 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 914 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 915 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 916 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 917 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 918 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 919 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 920 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 921 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 922 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 923 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 924 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 925 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 926 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 927 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 928 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 929 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 930 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 931 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 932 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 933 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 934 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 935 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 936 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 937 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 938 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 939 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 940 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 941 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 942 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 943 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 944 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 945 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 946 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 947 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 948 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 949 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 950 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 951 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 952 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 953 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 954 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 955 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 956 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 957 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 958 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 959 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 960 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 961 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 962 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 963 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 964 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 965 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 966 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 967 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 968 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 969 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 970 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 971 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 972 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 973 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 974 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 975 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 976 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 977 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 978 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 979 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 980 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 981 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 982 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 983 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 984 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 985 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 986 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 987 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 988 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 989 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 990 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 991 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 992 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 993 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 994 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 995 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 996 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 997 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 998 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 999 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1000 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1001 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1002 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1003 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1004 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1005 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1006 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1007 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1008 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1009 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1010 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1011 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1012 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1013 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1014 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1015 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1016 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1017 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1018 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1019 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1020 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1021 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1022 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1023 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1024 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1025 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1026 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1027 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1028 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1029 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1030 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1031 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1032 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1033 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1034 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1035 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1036 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1037 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1038 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1039 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1040 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1041 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1042 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1043 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1044 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1045 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1046 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1047 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1048 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1049 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1050 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1051 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1052 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1053 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1054 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1055 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1056 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1057 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1058 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1059 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1060 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1061 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1062 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1063 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1064 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1065 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1066 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1067 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1068 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1069 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1070 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1071 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1072 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1073 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1074 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1075 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1076 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1077 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1078 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1079 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1080 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1081 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1082 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1083 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1084 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1085 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1086 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1087 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1088 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1089 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1090 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1091 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1092 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1093 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1094 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1095 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1096 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1097 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1098 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1099 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1100 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1101 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1102 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1103 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1104 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1105 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1106 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1107 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1108 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1109 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1110 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1111 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1112 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1113 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1114 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1115 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1116 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1117 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1118 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1119 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1120 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1121 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1122 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1123 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1124 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1125 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1126 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1127 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1128 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1129 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1130 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1131 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1132 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1133 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1134 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1135 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1136 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1137 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1138 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1139 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1140 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1141 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1142 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1143 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1144 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1145 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1146 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1147 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1148 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1149 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1150 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1151 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1152 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1153 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1154 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1155 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1156 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1157 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1158 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1159 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1160 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1161 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1162 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1163 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1164 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1165 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1166 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1167 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1168 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1169 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1170 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1171 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1172 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1173 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1174 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1175 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1176 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1177 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1178 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1179 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1180 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1181 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1182 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1183 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1184 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1185 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1186 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1187 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1188 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1189 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1190 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1191 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1192 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1193 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1194 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1195 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1196 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1197 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1198 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1199 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1200 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1201 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1202 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1203 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1204 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1205 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1206 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1207 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1208 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1209 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1210 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1211 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1212 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1213 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1214 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1215 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1216 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1217 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1218 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1219 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1220 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1221 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1222 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1223 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1224 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1225 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1226 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1227 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1228 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1229 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1230 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1231 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1232 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1233 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1234 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1235 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1236 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1237 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1238 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1239 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1240 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1241 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1242 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1243 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1244 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1245 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1246 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1247 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1248 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1249 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1250 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1251 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1252 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1253 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1254 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1255 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1256 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1257 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1258 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1259 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1260 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1261 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1262 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1263 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1264 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1265 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1266 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1267 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1268 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1269 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1270 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1271 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1272 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1273 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1274 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1275 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1276 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1277 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1278 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1279 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1280 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1281 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1282 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1283 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1284 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1285 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1286 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1287 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1288 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1289 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1290 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1291 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1292 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1293 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1294 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1295 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1296 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1297 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1298 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1299 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1300 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1301 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1302 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1303 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1304 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1305 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1306 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1307 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1308 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1309 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1310 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1311 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1312 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1313 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1314 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1315 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1316 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1317 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1318 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1319 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1320 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1321 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1322 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1323 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1324 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1325 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1326 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1327 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1328 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1329 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1330 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1331 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1332 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1333 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1334 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1335 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1336 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1337 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1338 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1339 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1340 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1341 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1342 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1343 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1344 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1345 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1346 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1347 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1348 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1349 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1350 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1351 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1352 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1353 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1354 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1355 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1356 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1357 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1358 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1359 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1360 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1361 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1362 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1363 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1364 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1365 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1366 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1367 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1368 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1369 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1370 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1371 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1372 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1373 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1374 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1375 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1376 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1377 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1378 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1379 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1380 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1381 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1382 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1383 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1384 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1385 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1386 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1387 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1388 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1389 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1390 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1391 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1392 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1393 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1394 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1395 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1396 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1397 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1398 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1399 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1400 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1401 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1402 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1403 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1404 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1405 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1406 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1407 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1408 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1409 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1410 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1411 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1412 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1413 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1414 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1415 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1416 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1417 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1418 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1419 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1420 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1421 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1422 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1423 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1424 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1425 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1426 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1427 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1428 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1429 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1430 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1431 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1432 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1433 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1434 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1435 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1436 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1437 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1438 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1439 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1440 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1441 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1442 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1443 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1444 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1445 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1446 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1447 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1448 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1449 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1450 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1451 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1452 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1453 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1454 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1455 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1456 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1457 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1458 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1459 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1460 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1461 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1462 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1463 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1464 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1465 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1466 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1467 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1468 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1469 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1470 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1471 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1472 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1473 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1474 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1475 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1476 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1477 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1478 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1479 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1480 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1481 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1482 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1483 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1484 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1485 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1486 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1487 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1488 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1489 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1490 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1491 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1492 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1493 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1494 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1495 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1496 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1497 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1498 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1499 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1500 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1501 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1502 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1503 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1504 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1505 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1506 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1507 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1508 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1509 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1510 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1511 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1512 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1513 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1514 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1515 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1516 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1517 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1518 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1519 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1520 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1521 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1522 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1523 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1524 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1525 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1526 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1527 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1528 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1529 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1530 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1531 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1532 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1533 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1534 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1535 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1536 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1537 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1538 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1539 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1540 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1541 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1542 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1543 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1544 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1545 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1546 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1547 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1548 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1549 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1550 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1551 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1552 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1553 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1554 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1555 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1556 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1557 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1558 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1559 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1560 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1561 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1562 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1563 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1564 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1565 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1566 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1567 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1568 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1569 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1570 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1571 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1572 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1573 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1574 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1575 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1576 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1577 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1578 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1579 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1580 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1581 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1582 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1583 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1584 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1585 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1586 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1587 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1588 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1589 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1590 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1591 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1592 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1593 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1594 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1595 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1596 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1597 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1598 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1599 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1600 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1601 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1602 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1603 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1604 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1605 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1606 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1607 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1608 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1609 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1610 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1611 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1612 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1613 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1614 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1615 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1616 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1617 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1618 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1619 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1620 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1621 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1622 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1623 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1624 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1625 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1626 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1627 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1628 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1629 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1630 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1631 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1632 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1633 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1634 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1635 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1636 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1637 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1638 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1639 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1640 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1641 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1642 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1643 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1644 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1645 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1646 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1647 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1648 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1649 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1650 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1651 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1652 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1653 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1654 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1655 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1656 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1657 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1658 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1659 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1660 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1661 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1662 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1663 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1664 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1665 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1666 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1667 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1668 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1669 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1670 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1671 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1672 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1673 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1674 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1675 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1676 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1677 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1678 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1679 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1680 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1681 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1682 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1683 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1684 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1685 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1686 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1687 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1688 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1689 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1690 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1691 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1692 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1693 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1694 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1695 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1696 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1697 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1698 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1699 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1700 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1701 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1702 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1703 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1704 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1705 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1706 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1707 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1708 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1709 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1710 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1711 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1712 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1713 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1714 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1715 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1716 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1717 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1718 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1719 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1720 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1721 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1722 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1723 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1724 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1725 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1726 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1727 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1728 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1729 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1730 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1731 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1732 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1733 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1734 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1735 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1736 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1737 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1738 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1739 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1740 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1741 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1742 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1743 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1744 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1745 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1746 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1747 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1748 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1749 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1750 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1751 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1752 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1753 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1754 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1755 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1756 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1757 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1758 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1759 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1760 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1761 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1762 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1763 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1764 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1765 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1766 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1767 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1768 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1769 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1770 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1771 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1772 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1773 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1774 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1775 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1776 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1777 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1778 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1779 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1780 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1781 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1782 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1783 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1784 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1785 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1786 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1787 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1788 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1789 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1790 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1791 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1792 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1793 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1794 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1795 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1796 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1797 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1798 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1799 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1800 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1801 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1802 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1803 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1804 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1805 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1806 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1807 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1808 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1809 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1810 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1811 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1812 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1813 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1814 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1815 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1816 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1817 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1818 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1819 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1820 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1821 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1822 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1823 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1824 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1825 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1826 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1827 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1828 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1829 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1830 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1831 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1832 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1833 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1834 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1835 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1836 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1837 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1838 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1839 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1840 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1841 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1842 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1843 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1844 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1845 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1846 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1847 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1848 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1849 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1850 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1851 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1852 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1853 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1854 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1855 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1856 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1857 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1858 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1859 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1860 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1861 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1862 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1863 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1864 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1865 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1866 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1867 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1868 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1869 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1870 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1871 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1872 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1873 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1874 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1875 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1876 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1877 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1878 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1879 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1880 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1881 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1882 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1883 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1884 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1885 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1886 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1887 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1888 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1889 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1890 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1891 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1892 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1893 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1894 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1895 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1896 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1897 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1898 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1899 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1900 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1901 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1902 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1903 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1904 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1905 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1906 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1907 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1908 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1909 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1910 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1911 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1912 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1913 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1914 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1915 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1916 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1917 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1918 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1919 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1920 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1921 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1922 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1923 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1924 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1925 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1926 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1927 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1928 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1929 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1930 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1931 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1932 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1933 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1934 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1935 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1936 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1937 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1938 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1939 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1940 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1941 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1942 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1943 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1944 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1945 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1946 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1947 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1948 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1949 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1950 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1951 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1952 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1953 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1954 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1955 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1956 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1957 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1958 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1959 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1960 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1961 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1962 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1963 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1964 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1965 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1966 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1967 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1968 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1969 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1970 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1971 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1972 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1973 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1974 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1975 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1976 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1977 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1978 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1979 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1980 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1981 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1982 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1983 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1984 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1985 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1986 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1987 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1988 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1989 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1990 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1991 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1992 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1993 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1994 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1995 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1996 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1997 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1998 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 1999 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });
    test(`Login with valid Email 2000 `, async ({page}) => {
        await page.goto('https://binaryville.com/account/');

        await page.getByRole('textbox', {name: 'Email'}).fill("test1@example.com");
        await page.getByRole('textbox', {name: 'Password'}).fill("aksjndfk");
        await page.getByRole('button', {name: 'Sign In'}).click();

        await expect(page).toHaveURL(/aksjndfk/);
    });