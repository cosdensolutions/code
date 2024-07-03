import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("should have correct metadata and elements", async ({ page }) => {
    await expect(page).toHaveTitle("Cosden Solutions");
    await expect(
      page.getByRole("heading", {
        name: "Home Page",
      })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Form" })).toBeVisible();
  });

  test("should redirect to form page on click", async ({ page }) => {
    await page.getByRole("link", { name: "Form" }).click();

    await expect(page).toHaveTitle("Form");
  });
});

test.describe("Form Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/form");
  });

  test("should have correct metadata and elements", async ({ page }) => {
    await expect(page).toHaveTitle("Form");
    await expect(
      page.getByRole("heading", {
        name: "Form",
      })
    ).toBeVisible();
    await expect(page.getByPlaceholder("Enter Item")).toBeVisible();
    await expect(page.getByRole("button", { name: "Add" })).toBeVisible();
  });

  test("should have empty items list on start", async ({ page }) => {
    const itemsList = page.getByTestId("items-list");

    await expect(itemsList).toBeEmpty();
  });

  test("should add item to list", async ({ page }) => {
    const input = page.getByPlaceholder("Enter Item");

    await input.fill("Item 1");

    await page.getByRole("button", { name: "Add" }).click();

    const item = page.getByTestId("item").nth(0);

    await expect(item).toHaveText("Item 1");
    await expect(input).toBeEmpty();
  });
});
