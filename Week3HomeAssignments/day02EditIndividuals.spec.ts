import {test, expect} from '@playwright/test'

test("Edit an Individuals", async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("ravindran.ramdas@testleaf.com")
    await page.locator('[name=pw]').fill("RaviTestleaf#1432")
    await page.locator('#Login').click()
    await page.waitForTimeout(4000)
    await page.locator('.slds-icon-waffle').click()
    await page.waitForTimeout(4000)
    await page.locator('text="View All"').click()
    await page.locator('//p[text()="Individuals"]').click()
    //await page.locator('//span[text()="Individuals"]').click()
    await page.getByPlaceholder('Search this list...').click()
    await page.locator('[name="Individual-search-input"]').fill('leaf')
    await page.locator('[name="Individual-search-input"]').press('Enter')
    await page.locator('//a[@class="slds-truncate"]').first().click()
    await page.locator('//div[@title="Edit"]').click()
    await page.locator('(//div[@class="uiPopupTrigger"])[3]').click()
    await page.locator('//a[text()="Mr."]').first().click()
    await page.getByPlaceholder('First Name').fill('Smith1')
    const firstName = await page.getByPlaceholder('First Name').inputValue()
    const lastName = await page.getByPlaceholder('Last Name').inputValue()
    await page.locator('//span[text()="Save"]').click()
    // to verify toast message
    const successMsg=page.locator('//span[@class="toastMessage slds-text-heading--small forceActionsText"]')
    await expect(successMsg).toBeVisible()
    await expect(successMsg).toHaveText(`Individual "${firstName} ${lastName}" was saved.`)
 

})