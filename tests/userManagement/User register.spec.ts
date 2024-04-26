import { RegisterPage } from "../../support/auth/pages/register-page";
import { LoginPage } from "../../support/auth/pages/login-page";
import { SuccessfulRegister } from "../../support/auth/pages/successful-register-page";
import { SuccessfulAccountDelation } from "../../support/auth/pages/successful-deletion-of-account-pages";
import {
  UserRegister,
  testDataUserRegister,
} from "../../support/testData/user-managemts/user-register";
import { testBuilder } from "../../utilities/test-builder";

const test = testBuilder.build();

test.describe("Register user on Automation Practise site @usermanagement", () => {
  let registerPage: RegisterPage;
  let loginPage: LoginPage;
  let successfulRegisterPage: SuccessfulRegister;
  let accountDeletionPage: SuccessfulAccountDelation;
  let dataUserRegister: UserRegister;

  test.beforeEach(async ({ page }, testInfo) => {
    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);
    successfulRegisterPage = new SuccessfulRegister(page);
    accountDeletionPage = new SuccessfulAccountDelation(page);
    dataUserRegister = testDataUserRegister(testInfo.project.name);
  });

  test("Register user @usermanagement", async ({ page }) => {
    await test.step("Navigate to the site and verify it", async () => {
      await loginPage.loadMainPage();
    });

    await test.step("Click on Sign up/ Login button and verify the page", async () => {
      await loginPage.clickLoginSignUpButton();
    });

    await test.step("Enter name and email adress then click sign up button", async () => {
      await loginPage.fillRegisterNameandEmail(
        dataUserRegister.name,
        dataUserRegister.email,
      );
      await loginPage.clickSignUpButton();
    });

    await test.step("Fill accounst details", async () => {
      await registerPage.verifyIfNameAndaddressAreFilled(
        dataUserRegister.name,
        dataUserRegister.email,
      );
      await registerPage.verifyregisterPage();
      await registerPage.fillAccountInformation(
        dataUserRegister.password,
        dataUserRegister.company,
        dataUserRegister.days,
        dataUserRegister.months,
        dataUserRegister.years,
      );
    });

    await test.step("Fill adress informations", async () => {
      await registerPage.fillAddressInformation(
        dataUserRegister.name,
        dataUserRegister.surname,
        dataUserRegister.street,
        dataUserRegister.city,
        dataUserRegister.state,
        dataUserRegister.postalCode,
        dataUserRegister.phone,
        dataUserRegister.country,
      );
    });

    await test.step('Click "Create Account" button and verify if it ends successful', async () => {
      await registerPage.clickCreateAccountButton();
      await successfulRegisterPage.verifyAccountCreatedPage();
      await successfulRegisterPage.clickContinueButton();
    });

    await test.step("Verify new user", async () => {
      await loginPage.verifyloggedUserText(dataUserRegister.name);
    });

    await test.step("Delete account and verify if its deleted", async () => {
      await loginPage.clickDeleteAccount();
      await accountDeletionPage.verifyAccountRemovingPage();
      await accountDeletionPage.clickContinueButton();
    });
  });
});
