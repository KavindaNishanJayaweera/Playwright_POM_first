import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { log } from "node:console";
import { DashboardPage } from "../pages/DashboardPage";

test('login', async function loginPage({page}){

    await page.goto('https://test-automation-app.vercel.app/login');
    //create a obj and assign it to Vari
    let login = new LoginPage(page);
    await login.typeUsername('test@gmail.com');
    await login.typePassword('123');
    await login.clickBtn();
    //Previos - await expect(page.locator('[data-slot="alert-description"]')).toHaveText('Invalid email or password. Please try again.');
    //Now
    await expect(login.getErrorMessage()).toHaveText('Invalid email or password. Please try again.');
})

test('loginerror',async function loginPageTestII({page}){
    await page.goto('https://test-automation-app.vercel.app/login');
    let login = new LoginPage(page);
    await login.typeUsername('demo@gmail.com');
    await login.typePassword('Admin123');
    await login.clickBtn();
    await expect(login.getErrorMessage()).toHaveText('Invalid email or password. Please try again.');
})

test('valid login success title',async function validLogin({page}){
    await page.goto('https://test-automation-app.vercel.app/login');
    let login = new LoginPage(page);
    await login.typeUsername('test@gmail.com');
    await login.typePassword('Admin123');
    await login.clickBtn();
    
    let dashboard = new DashboardPage(page);
    await expect(dashboard.verifyHeader()).toHaveText('Learn Test Automation');

})