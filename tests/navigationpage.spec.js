import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { NavigationPage } from "../pages/NavigationPanel";

test('TC001', async function navigationTest({page}){

    //Login
    let login = new LoginPage(page);
    await login.gotoSite();
    await login.typeUsername('test@gmail.com');
    await login.typePassword('Admin123');
    await login.clickBtn();

    //Verify button
    let navigation = new NavigationPage(page);
    await expect(navigation.returnaddStudentBtn()).toBeVisible();

})

test('TC002', async function navigationTest({page}){

    //Login
    let login = new LoginPage(page);
    await login.gotoSite();
    await login.typeUsername('test@gmail.com');
    await login.typePassword('Admin123');
    await login.clickBtn();

    //Verify button
    let navigation = new NavigationPage(page);
    await expect(navigation.returnManageStudentbtn()).toBeVisible();

})

test('TC003', async function navigationTest({page}){

    //Login
    let login = new LoginPage(page);
    await login.gotoSite();
    await login.typeUsername('user@gmail.com');
    await login.typePassword('user123');x``
    await login.clickBtn();

    //Verify button
    let navigation = new NavigationPage(page);
    await expect(navigation.returnpaymentbtn()).toBeHidden();

})