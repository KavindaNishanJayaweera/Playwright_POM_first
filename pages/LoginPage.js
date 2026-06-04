import { expect } from "@playwright/test";

export class LoginPage{

    //Create Constructure method
    //Inside the constructor Get All UI elements need for the Automation

    constructor(page){
        //If someone call Loginpage, They firstly do things inside constructor
        //Can use this variable outside as well

        this.page = page;

        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.signinBtn =  page.locator('[type="submit"]');
        this.errorMessage = page.locator('[data-slot="alert-description"]')
    }

    //Goto Site
    async gotoSite(){
       await this.page.goto('/login');
    }


    //Write Action methods for those elements outside of the constructor
    async typeUsername(usernameValue){
        //Fill return promise - so add await
        //when adding await we need to guide method to wait 
        // so change method as async
        await this.usernameField.fill(usernameValue);
    }

    async typePassword(passwordValue){
        //When user call this method they need pass value for passwordvalue
        //This call method parameterized
        await this.passwordField.fill(passwordValue)
    }

    async clickBtn(){
        await this.signinBtn.click();
    }

    getErrorMessage(){
        //If someone call this method they will return/get erromessage locator value
       return this.errorMessage;
    }
    
    //Export the class
    //Avaialble for everyone this class ---- Export class LoginPage{

}