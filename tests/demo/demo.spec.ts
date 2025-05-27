// tests/demo.spec.ts
import { test, expect } from '@playwright/test';

test('demo actions görünmeli', async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('text=More information'); // bilinçli hata (element yok)
});
