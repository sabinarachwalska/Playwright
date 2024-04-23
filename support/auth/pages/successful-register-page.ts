import {Locator, Page, Response} from '@playwright/test'
import { BasePage } from '../../core/base-page'

export class SuccessfulRegister extends BasePage {
    public readonly name:string = "Successful Register"
    public readonly accountCreatedTitle : Locator = this.page.getByText('Account Created!')
    public readonly accountCreatedInformation : Locator = this.page.getByText('Congratulations! Your new')
    public readonly continueButton : Locator = this.page.getByRole('link', { name: 'Continue' })
    public constructor (page : Page){
        super(page)
    }
}