// create an account
import {test,expect} from '@playwright/test'

test('create new account', async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in')
    await page.getByLabel('username').fill("ravindran.ramdas@testleaf.com")
    await page.getByLabel('password').fill("RaviTestleaf#1432")
    await page.locator('#Login').click()
    await expect(page).toHaveTitle("Lightning Experience")
    await expect(page).toHaveURL("https://testleaf22-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
    await page.waitForTimeout(4000)
    await page.locator(".slds-icon-waffle").click()
    await page.getByText('View All').click()
    await page.getByPlaceholder('Search apps or items...').fill('Service')
    await page.locator("(//p[@class='slds-truncate'])[1]").click()
    await page.locator('a[title="Accounts"]').click()
    await page.getByRole('button',{name:"New"}).click()
    await page.locator('input[name="Name"]').fill('TestLeafAccount')
    const accntName= await page.locator('input[name="Name"]').inputValue() // fetches account name
    await page.locator('//button[@name="SaveEdit"]').click()

    const toastMsg = page.locator('[class="slds-hyphenate"]')
    await expect(toastMsg).toBeVisible()
    await expect(toastMsg).toHaveText(`Account "${accntName}" was created.`) // verifies the toast mesage displayed
       
})
