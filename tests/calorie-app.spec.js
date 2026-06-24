import { test, expect } from '@playwright/test';

test('Start button opens next screen', async ({ page }) => {
  await page.goto('https://veronika181.github.io/--Calorie-calculator-app--/');

  await page.getByRole('button', { name: /start/i }).click();

  await expect(page.locator('#genderSelect')).toBeVisible();
});
