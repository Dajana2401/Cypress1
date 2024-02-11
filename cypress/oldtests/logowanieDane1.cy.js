import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
const login= new LoginPage;
const homePage= new HomePage;
describe ("Login validation",()=>{
    it ("task one login data check",()=>{
        login.navigate();
        login.validateLoginTitle();
        homePage.fillUserLogin('user888@gmail.com');
        homePage.fillUserPassword('1234567890');
        homePage.clickLogin();
        homePage.logout();
    })
})