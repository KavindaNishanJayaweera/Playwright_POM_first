export class NavigationPage{


    constructor(page){

        this.btnaddstudent = page.locator('#btnaddStudent');
        //this.btnmanagestu = page.locator('#btnmanageStudent');

    }

    returnaddStudentBtn(){
        return this.btnaddstudent;
    }

}