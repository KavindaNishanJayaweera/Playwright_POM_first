import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { log } from "node:console";

test('login', async function loginPage({page}){

    await page.goto('https://test-automation-app.vercel.app/login');
    //create a obj and assign it to Vari
    let login = new LoginPage(page);
    await login.typeUsername();
    await login.typePassword();
    await login.clickBtn();
    //Previos - await expect(page.locator('[data-slot="alert-description"]')).toHaveText('Invalid email or password. Please try again.');
    //Now
    await expect(login.getErrorMessage()).toHaveText('Invalid email or password. Please try again.');
})

test('loginerror',async function loginPageTestII({page}){
    await page.goto('https://test-automation-app.vercel.app/login');
    let login = new LoginPage(page);
    await login.typeUsername();
    await login.typePassword();
    await login.clickBtn();

})