export class NavigationPage{


    constructor(page){

        this.btnaddstudent = page.locator('#btnaddStudent');
        this.btnmanagestu = page.locator('#btnmanageStudent');
        this.btnPayments = page.locator('#btnpayments');

    }

    returnaddStudentBtn(){
        return this.btnaddstudent;
    }

    returnManageStudentbtn(){
        return this.btnmanagestu;
    }

     returnpaymentbtn(){
        return this.btnPayments;
    }

}