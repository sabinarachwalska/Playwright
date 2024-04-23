import {Locator, Page, Response} from '@playwright/test'
import { BasePage } from '../../core/base-page'

export class RegisterPage extends BasePage {
    public readonly name:string = "Register"
    public readonly signUpInformationText : Locator = this.page.getByText('Enter Account Information')
    public readonly userTitle : Locator = this.page.getByText('Title')
    public readonly userTitleMr : Locator = this.page.getByLabel('Mr.')
    public readonly userTitleMrs : Locator = this.page.getByText('Mrs.')
    public readonly userName : Locator = this.page.getByText('Name *', { exact: true })
    public readonly password : Locator = this.page.getByText('Password *', { exact: true })
    public readonly userNameInput : Locator = this.page.getByLabel('Name *')
    public readonly passwordinput : Locator = this.page.getByLabel('Password *')
    public readonly dateOfBirthLabel : Locator = this.page.getByText('Date of Birth')
    public readonly dateOfBirthDays : Locator = this.page.locator('#days')
    public readonly dateOfBirthMonths : Locator = this.page.locator('#months')
    public readonly dateOfBirthYears : Locator = this.page.getByText('Sign up for our newsletter!')
    public readonly newsletterButton : Locator = this.page.locator('#years')
    public readonly specialButton : Locator = this.page.getByText('Receive special offers from')
    public readonly addressInformationLabel : Locator = this.page.getByText('Address Information')
    public readonly addressFirstNameButtonLabel : Locator = this.page.getByText('First name *')
    public readonly addressFirstNameButton : Locator = this.page.getByLabel('First name *')
    public readonly addressLastNameButtonLabel : Locator = this.page.getByText('Last name *')
    public readonly addressLastNameButton : Locator = this.page.getByLabel('Last name *')
    public readonly addressCompanyButtonLabel : Locator = this.page.getByText('Company', { exact: true })
    public readonly addressCompanyButton : Locator = this.page.getByLabel('Company', { exact: true })
    public readonly addressFirstLineButtonLabel : Locator = this.page.getByText('Address * (Street address, P.')
    public readonly addressFirstLineButton : Locator = this.page.getByLabel('Address * (Street address, P.')
    public readonly addressFirstSecondButtonLabel : Locator = this.page.getByText('Address 2')
    public readonly addressFirstSecondButton : Locator = this.page.getByLabel('Address 2')
    public readonly addressCountryButtonLabel : Locator = this.page.getByText('Country *')
    public readonly addressCountryButton : Locator = this.page.getByLabel('Country *')
    public readonly addressStateButtonLabel : Locator = this.page.getByText('State *')
    public readonly addressStateButton : Locator = this.page.getByLabel('State *')
    public readonly addressCityButtonLabel : Locator = this.page.getByText('City *')
    public readonly addressCityButton : Locator = this.page.getByLabel('City *')
    public readonly addressPostalCodeButtonLabel : Locator = this.page.getByText('Zipcode *')
    public readonly addressPostalCodeButton : Locator = this.page.locator('#zipcode')
    public readonly addressMobilePhoneButtonLabel : Locator = this.page.getByText('Mobile Number *')
    public readonly addressMobilePhoneButton : Locator = this.page.getByLabel('Mobile Number *')
    public readonly createAccountButton : Locator = this.page.getByRole('button', { name: 'Create Account' })

    public constructor (page : Page){
        super(page)
    }
}
