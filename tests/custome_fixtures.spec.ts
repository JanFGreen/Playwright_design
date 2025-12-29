import{test as base, expect} from '@playwright/test';

type MyFixtures = {
  testData: {
    email: string;
    password: string;
  };
};

const test = base.extend<MyFixtures>({
  testData: async ({ }, use) => {
        // Setup code for the custom fixture
    const data = {email: "test@example.com", password: "password123"};

    await use(data);
    // Teardown code for the custom fixture (if needed)
  }
  });

test('using custom fixture testData', async ({page, testData}) => {
  await page.goto('https://binaryville.com');
  
  // Click the account/sign in link first
  const signInLink = page.getByRole('link', {name: /account/i});
  await signInLink.click();
  
  // Fill in login form
  const emailInput = page.getByRole('textbox', {name: "Email"});
  await emailInput.fill(testData.email);
  
  const passwordInput = page.getByRole('textbox', {name: "Password"});
  await passwordInput.fill(testData.password);

  // Click sign in button with await
  const signInButton = page.getByRole('button', {name: "Sign In"});
  await signInButton.click();
  
  // Wait for navigation and verify successful login
  await page.waitForLoadState('networkidle');
  const url = page.url();
  expect(url).toContain(testData.password)

}); 