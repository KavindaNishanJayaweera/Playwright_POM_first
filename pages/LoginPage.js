import { expect } from "@playwright/test";

export class LoginPage{

    //Create Constructure method
    //Inside the constructor Get All UI elements need for the Automation

    constructor(page){
        //If someone call Loginpage, They firstly do things inside constructor

        //Can use this variable outside as well
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.signinBtn =  page.locator('[type="submit"]');
        this.errorMessage = page.locator('[data-slot="alert-description"]')
    }

    //Write Action methods for those elements outside of the constructor
    async typeUsername(){
        //Fill return promise - so add await
        //when adding await we need to guide method to wait 
        // so change method as async
        await this.usernameField.fill('test@gmail.com');
    }

    async typePassword(){
        await this.passwordField.fill('Admin1234')
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