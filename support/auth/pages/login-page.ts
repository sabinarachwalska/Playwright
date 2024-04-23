import {Locator, Page, Response} from '@playwright/test'
import { BasePage } from '../../core/base-page'

export class LoginPage extends BasePage {
    public readonly name:string = "Login"
    public readonly signUpLoginButton : Locator = this.page.getByRole('link', { name: ' Signup / Login' })
    public readonly loginHeading : Locator = this.page.getByRole('heading', { name: 'Login to your account' })
    public readonly loginInput : Locator = this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    public readonly passwordInput : Locator = this.page.getByPlaceholder('Password')
    public readonly loginButton : Locator = this.page.getByRole('button', { name: 'Login' })
    public readonly signUpButton : Locator = this.page.getByRole('button', { name: 'Signup' })
    public readonly signUpTitle : Locator = this.page.getByRole('heading', { name: 'New User Signup!' })
    public readonly signUpNameInput : Locator = this.page.getByPlaceholder('Name')
    public readonly signUpEmailInput : Locator = this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
    public constructor (page : Page){
        super(page)
    }
}
