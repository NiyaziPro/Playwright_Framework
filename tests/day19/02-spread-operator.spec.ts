import { test } from "@playwright/test";

test("Spread Operator", async ({ page }) => {
  const defaultSettings = {
    theme: "dark",
    autoSave: true,
    notifications: false,
  };

  const userSettings = {
    theme: "light",
    notifications: true,
  };

  const finalSettings = {...defaultSettings, ...userSettings};

  console.log(finalSettings);
});
