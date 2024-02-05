import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
const login= new LoginPage;
const homePage= new HomePage;
describe ("Login validation",()=>{
    it ("task one login data check",()=>{
        login.navigate();
        login.validateLoginTitle();
        homePage.fillUserLogin('testowyqa@qa.team');
        homePage.fillUserPassword('QA!automation-1');
        homePage.clickLogin();
        homePage.logout();
    })
})