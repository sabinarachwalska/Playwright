import {Locator, Page, Response} from '@playwright/test'
import { BasePage } from '../../core/base-page'

export class SuccessfulAccountDelation extends BasePage {
    public readonly name:string = "Successful Account Delation"
    public readonly accountCreatedTitle : Locator = this.page.getByText('Account Deleted!')
    public readonly accountCreatedInformation : Locator = this.page.getByText('Your account has been')
    public readonly continueButton : Locator = this.page.getByRole('link', { name: 'Continue' })
    public constructor (page : Page){
        super(page)
    }
}