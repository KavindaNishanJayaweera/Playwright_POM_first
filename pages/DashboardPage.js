export class DashboardPage{

    //Required step 1 - Create Constructure method
    //Required step 2 - Inside the constructor Get All UI elements need for the Automation
    constructor(page){

        this.header = page.locator('#header');

    }


    //Required step 3 - Write Action methods for those elements outside of the constructor
    verifyHeader(){
        return this.header;
    }

    
    //Required step 4 - Export the class ---- Avaialble for everyone this class ---- Export class LoginPage{

}